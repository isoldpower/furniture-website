import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DetailedProductCard.module.scss';
import {ImagesHover} from "@/features";
import {websiteRoutes} from "@/shared/lib";
import {Product, ProductCard} from "@/entities/product";
import {useGetProductImagesQuery, useGetProductMaterialsQuery} from "@/app/redux";

interface DetailedProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({className, data, ...props}: DetailedProductCardProps) => {
    const href = websiteRoutes.catalog + data.section.href_postfix + data.href_postfix;
    const {currentData : images, isLoading : isImageLoading, isError : isImageError} = useGetProductImagesQuery(data.id);
    const {currentData : materials, isLoading : isMaterialLoading, isError : isMaterialError} = useGetProductMaterialsQuery(data.id);

    if(isImageLoading || isMaterialLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isImageError || isMaterialError) return <div className="cc-fs-500">Ошибка :(</div>

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