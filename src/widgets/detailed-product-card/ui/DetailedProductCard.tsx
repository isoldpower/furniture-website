import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DetailedProductCard.module.scss';
import {ProductCard, ProductData} from "@/entities";
import {ImagesSlider} from "@/features";
import {websiteRoutes} from "@/shared/lib";

interface DetailedProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProductData;
    sectionPostfix: string;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({className, data, sectionPostfix, ...props}: DetailedProductCardProps) => {
    const href = websiteRoutes.catalog + sectionPostfix + data.postfix;

    return (
        <ProductCard className={`${classes.detailedCard__wrapper} ${className}`} {...props} data={{
            title: data.title,
            materials: data.materials,
            href: href,
            displayImages: <ImagesSlider data={data} />
        }} />
    );
};