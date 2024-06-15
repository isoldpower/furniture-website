import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './ProductsListFx.module.scss';
import {ProductsListError} from "./ProductsListError";
import {ProductsListFetching} from "./ProductsListFetching";

interface SectionProductsListProps {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const ProductsListFx: FC<SectionProductsListProps> = ({children, isLoading, isError}: SectionProductsListProps) => {
    if(isLoading) return <ProductsListFetching />
    else if (isError) return <ProductsListError />

    return (
        <div className={`${classes.catalogSection__catalog}`}>
            {children}
        </div>
    );
};