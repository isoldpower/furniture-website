import {FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import {ProductImagesFetching} from "./ProductImagesFetching";
import {ProductImagesError} from "./ProductImagesError";

interface ProductOverviewImagesProps {
    isLoading?: boolean;
    isError?: boolean;
    children?: ReactElement;
}

export const ProductImagesFx: FC<ProductOverviewImagesProps> = ({isLoading, isError, children}: ProductOverviewImagesProps) => {
    if (isLoading) return <ProductImagesFetching className={children.props.className} />
    else if (isError) return <ProductImagesError />

    return children;
};