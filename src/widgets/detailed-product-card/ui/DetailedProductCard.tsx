import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DetailedProductCard.module.scss';
import {ProductCard, ProductData} from "@/entities";
import {ImagesSlider} from "@/features";

interface DetailedProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProductData;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({className, data, ...props}: DetailedProductCardProps) => {
    return (
        <ProductCard className={`${classes.detailedCard__wrapper} ${className}`} {...props} data={{
            title: data.title,
            materials: data.materials,
            href: '/products' + data.postfix,
            displayImages: <ImagesSlider data={data} />
        }} />
    );
};