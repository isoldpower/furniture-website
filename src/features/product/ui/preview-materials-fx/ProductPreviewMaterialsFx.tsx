import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {ProductPreviewMaterialsFetching} from "./ProductPreviewMaterialsFetching";
import {ProductPreviewMaterialsError} from "./ProductPreviewMaterialsError";

type ProductMaterialsPreviewProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const ProductPreviewMaterialsFx: FC<ProductMaterialsPreviewProps> = ({isLoading, isError, children}: ProductMaterialsPreviewProps) => {
    if (isLoading) return <ProductPreviewMaterialsFetching />
    else if (isError) return <ProductPreviewMaterialsError />

    return children;
};