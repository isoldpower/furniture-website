import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DetailedProductCard.module.scss';
import {websiteRoutes} from "@/shared/lib";
import {Product, ProductCard} from "@/entities/product";
import {useGetProductImagesQuery} from "@/widgets/product";
import {ImagesHover} from "@/features/catalog-section";
import {ProductPreviewMaterialsFx} from "@/features/product";

interface DetailedProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({className, data, ...props}: DetailedProductCardProps) => {
    const href = websiteRoutes.catalog + data.section.href_postfix + data.href_postfix;
    const {currentData : images, isLoading : isImageLoading, isError : isImageError, isFetching: isImageFetching} = useGetProductImagesQuery(data.id);

    if(isImageLoading || isImageFetching) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isImageError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <ProductCard className={`${classes.detailedCard__wrapper} ${className} cc-flex cc-width-1of1`} {...props} data={{
            ...data,
            href: href,
            materials: <ProductPreviewMaterialsFx id={data.id} />,
            displayImages: <ImagesHover data={{
                ...data,
                images: images
            }} />
        }} />
    )
};