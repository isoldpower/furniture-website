import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './ProductCard.module.scss';
import {MoreLink} from "@/shared/ui-toolkit";
import {Product} from "@/entities/product";

interface ProductCardProps {
    data?: Product;
    displayImages?: ReactNode;
    materials?: ReactNode;
    href: string;
}

export const ProductCard: FC<ProductCardProps> = ({data, ...props}: ProductCardProps) => {
    return (
        <div className={`${classes.productCard__wrapper} cc-grid`}>
            <div className={`${classes.productCard__content} cc-flex cc-grid cc-gap-7`}>
                <div className={`${classes.productCard__imageWrapper} cc-flex cc-width-1of1`}>
                    {props.displayImages}
                </div>
                <div className={`${classes.productCard__body} cc-flex cc-flex-col cc-gap-2`}>
                    <h3 className={`${classes.productCard__heading} cc-fs-300`}>{data.title}</h3>
                    <p className={`${classes.productCard__materialsWrapper}`}>
                        {props.materials}
                    </p>
                </div>
                <div className={`${classes.productCard__buttonWrapper} cc-flex cc-align-items-end`}>
                    <MoreLink className={`${classes.productCard__button}`} to={props.href}>Подробнее</MoreLink>
                </div>
            </div>
        </div>
    );
};