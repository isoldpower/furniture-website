import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {ProductImagesFetching} from "@/features/product/ui/images-fx/ProductImagesFetching";
import {ProductImagesError} from "@/features/product/ui/images-fx/ProductImagesError";

type AboutImageFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const AboutImageFx: FC<AboutImageFxProps> = ({children, isLoading, isError}: AboutImageFxProps) => {
    if (isLoading) return <ProductImagesFetching />;
    else if (isError) return <ProductImagesError />;

    return children;
};