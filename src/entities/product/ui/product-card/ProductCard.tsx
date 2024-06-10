import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductCard.module.scss';
import {MoreLink} from "@/shared/ui-toolkit";
import {ProductCardData} from "../../model/props";

interface ProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProductCardData;
}

export const ProductCard: FC<ProductCardProps> = ({className, data, ...props}: ProductCardProps) => {
    return (
        <div className={`${classes.productCard__wrapper} ${className} cc-grid`} {...props}>
            <div className={`${classes.productCard__content} cc-flex cc-grid cc-gap-7`}>
                <div className={`${classes.productCard__imageWrapper} cc-flex cc-width-1of1`}>
                    {data.displayImages}
                </div>
                <div className={`${classes.productCard__body} cc-flex cc-flex-col cc-gap-2`}>
                    <h3 className={`${classes.productCard__heading} cc-fs-300`}>{data.title}</h3>
                    <p className={`${classes.productCard__materialsWrapper}`}>
                        {data.materials}
                    </p>
                </div>
                <div className={`${classes.productCard__buttonWrapper} cc-flex cc-align-items-end`}>
                    <MoreLink className={`${classes.productCard__button}`} to={data.href}>Подробнее</MoreLink>
                </div>
            </div>
        </div>
    );
};