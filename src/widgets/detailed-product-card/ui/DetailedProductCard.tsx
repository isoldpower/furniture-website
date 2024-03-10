import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DetailedProductCard.module.scss';
import {ProductData} from "@/entities/product/model";
import {ProductCard} from "@/entities/product/ui/card/ProductCard";
import {ImagesSlider} from "@/features/images-slider/ui/slider/ImagesSlider";

interface DetailedProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProductData;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({className, data, ...props}: DetailedProductCardProps) => {
    return (
        <ProductCard className={`${classes.detailedCard__wrapper} ${className}`} {...props} data={{
            title: data.title,
            materials: data.materials,
            href: '/products' + data.postfix,
            displayImages: <ImagesSlider data={{images: data.images}} />
        }} />
    );
};