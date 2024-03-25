import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './DetailedProductCard.module.scss';
import {ImagesHover} from "@/features";
import {websiteRoutes} from "@/shared/lib";
import {Product, ProductCard} from "@/entities/product";
import {sections} from "@/widgets/catalog-section";
import {getImages, getMaterials} from "@/widgets/product/lib";

interface DetailedProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({className, data, ...props}: DetailedProductCardProps) => {
    const href = websiteRoutes.catalog + sections.find(section => section.id === data.sectionId).hrefPostfix + data.hrefPostfix;

    return (
        <ProductCard className={`${classes.detailedCard__wrapper} ${className} cc-flex cc-width-1of1`} {...props} data={{
            title: data.title,
            materials: getMaterials(data.id),
            href: href,
            displayImages: <ImagesHover data={{
                ...data,
                images: getImages(data.id)
            }} />
        }} />
    );
};