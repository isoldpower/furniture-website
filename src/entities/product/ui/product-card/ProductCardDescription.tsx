import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './ProductCard.module.scss';
import {Product} from "@/entities/product";

type ProductCardDescriptionProps = {
    data?: Product;
    children: ReactNode;
}

export const ProductCardDescription: FC<ProductCardDescriptionProps> = ({data, children}: ProductCardDescriptionProps) => {
    return data ? (
        <div className={`${classes.productCard__body} cc-flex cc-flex-col cc-gap-2`}>
            <h3 className={`${classes.productCard__heading} cc-fs-300`}>{data.title}</h3>
            <p className={`${classes.productCard__materialsWrapper}`}>
                {children}
            </p>
        </div>
    ) : undefined;
};