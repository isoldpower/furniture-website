import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {ProductsListError} from "./ProductsListError";
import {ProductsListFetching} from "./ProductsListFetching";

type SectionProductsListProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const ProductsListFx: FC<SectionProductsListProps> = ({children, isLoading, isError}: SectionProductsListProps) => {
    if(isLoading) return <ProductsListFetching />
    else if (isError) return <ProductsListError />

    return children;
};