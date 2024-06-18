import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {ProductMaterialsFetching} from "./ProductMaterialsFetching";
import {ProductMaterialsError} from "./ProductMaterialsError";

interface ProductOverviewMaterialsProps {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const ProductMaterialsFx: FC<ProductOverviewMaterialsProps> = ({isLoading, isError, children}: ProductOverviewMaterialsProps) => {
    if(isLoading) return <ProductMaterialsFetching />
    else if (isError) return <ProductMaterialsError />

    return children;
};