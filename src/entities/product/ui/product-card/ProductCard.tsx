import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './ProductCard.module.scss';
import {MoreLink} from "@/shared/ui-toolkit";

type ProductCardProps = {
    children: ReactNode;
    href: string;
}

export const ProductCard: FC<ProductCardProps> = ({href, children}: ProductCardProps) => {
    return (
        <div className={`${classes.productCard__content} cc-flex cc-flex-col cc-width-1of1 cc-gap-7`}>
            {children}
            <div className={`${classes.productCard__buttonWrapper} cc-flex cc-align-items-end`}>
                <MoreLink className={`${classes.productCard__button}`} to={href}>Подробнее</MoreLink>
            </div>
        </div>
    );
};