import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {LoadingPage} from "@/pages/loading-page";
import {ErrorPage} from "@/pages/error-page";

type ProductPageFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const ProductPageFx: FC<ProductPageFxProps> = ({isLoading, isError, children}: ProductPageFxProps) => {
    if (isLoading) return <LoadingPage />
    else if (isError) return <ErrorPage />

    return children;
};