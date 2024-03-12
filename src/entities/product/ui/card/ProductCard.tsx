import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductCard.module.scss';
import {MoreLink} from "@/shared/ui";
import {ProductCardData} from "../../model";

interface ProductCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProductCardData;
}

export const ProductCard: FC<ProductCardProps> = ({className, data, ...props}: ProductCardProps) => {
    return (
        <div className={`${classes.productCard__wrapper} ${className}`} {...props}>
            <div className={`${classes.productCard__content} cc-grid cc-gap-7`}>
                <div className={`${classes.productCard__imageWrapper} cc-flex`}>
                    {data.displayImages}
                </div>
                <div className={`${classes.productCard__body} cc-grid cc-gap-2`}>
                    <h3 className={`${classes.productCard__heading} cc-fs-300`}>{data.title}</h3>
                    <p className={`${classes.productCard__materials}`}>{data.materials}</p>
                </div>
                <div className={`${classes.productCard__buttonWrapper}`}>
                    <MoreLink className={`${classes.productCard__button}`} to={data.href}>Подробнее</MoreLink>
                </div>
            </div>
        </div>
    );
};