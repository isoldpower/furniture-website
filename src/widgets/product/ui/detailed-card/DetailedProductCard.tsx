import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DetailedProductCard.module.scss';
import {websiteRoutes} from "@/shared/lib";
import {Product, ProductCard} from "@/entities/product";
import {useGetProductImagesQuery, useGetProductMaterialsQuery} from "@/widgets/product";
import {ImagesHover} from "@/features/catalog-section";

interface DetailedProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({className, data, ...props}: DetailedProductCardProps) => {
    const href = websiteRoutes.catalog + data.section.href_postfix + data.href_postfix;
    const {currentData : images, isLoading : isImageLoading, isError : isImageError, isFetching: isImageFetching} = useGetProductImagesQuery(data.id);
    const {currentData : materials, isLoading : isMaterialLoading, isError : isMaterialError, isFetching: isMaterialFetching} = useGetProductMaterialsQuery(data.id);

    if(isImageLoading || isMaterialLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isImageError || isMaterialError) return <div className="cc-fs-500">Ошибка :(</div>
    else if (isImageFetching || isMaterialFetching) return <div className="cc-fs-500">Идет загрузка...</div>

    return (
        <ProductCard className={`${classes.detailedCard__wrapper} ${className} cc-flex cc-width-1of1`} {...props} data={{
            ...data,
            href: href,
            materials: materials,
            displayImages: <ImagesHover data={{
                ...data,
                images: images
            }} />
        }} />
    )
};