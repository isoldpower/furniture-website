import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {ProductPreviewImagesFetching} from "./ProductPreviewImagesFetching";
import {ProductPreviewImagesError} from "./ProductPreviewImagesError";

type ProductImagesFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const ProductPreviewImagesFx: FC<ProductImagesFxProps> = ({isError, children, isLoading}: ProductImagesFxProps) => {
    if (isLoading) return <ProductPreviewImagesFetching />;
    else if (isError) return <ProductPreviewImagesError />;

    return children;
};