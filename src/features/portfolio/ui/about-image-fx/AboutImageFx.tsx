import {FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import {ProductImagesFetching} from "./ProductImagesFetching";
import {ProductImagesError} from "./ProductImagesError";

type AboutImageFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactElement;
}

export const AboutImageFx: FC<AboutImageFxProps> = ({children, isLoading, isError}: AboutImageFxProps) => {
    if (isLoading) return <ProductImagesFetching className={children.props.className} />;
    else if (isError) return <ProductImagesError className={children.props.className} />;

    return children;
};