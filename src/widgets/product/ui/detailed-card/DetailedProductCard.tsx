import {FC} from "react";
import '@/app/scss/main.scss';
import {websiteRoutes} from "@/shared/lib";
import {Product, ProductCard} from "@/entities/product";
import {useGetProductImagesQuery} from "@/widgets/product";
import {ImagesHover} from "@/features/catalog-section";
import {ProductPreviewMaterialsFx} from "@/features/product";

interface DetailedProductCardProps {
    data?: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({data}: DetailedProductCardProps) => {
    const href = websiteRoutes.catalog + data?.section.href_postfix + data?.href_postfix;
    const {
        currentData: images,
        isLoading: isImageLoading,
        isError: isImageError,
        isFetching: isImageFetching
    } = useGetProductImagesQuery(data?.id);

    if (isImageLoading || isImageFetching) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isImageError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <ProductCard
             data={data}
             displayImages={<ImagesHover data={{...data, images: images}}/>}
             href={href}
             materials={<ProductPreviewMaterialsFx productId={data.id}/>}
        />
    )
};