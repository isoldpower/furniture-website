import {FC} from "react";
import '@/app/scss/main.scss';
import {imageFailed} from "@/shared/lib";
import {ProgressiveImage} from "@/shared/ui-toolkit";

type ProductImagesErrorProps = {
    className?: string;
}

export const ProductImagesError: FC<ProductImagesErrorProps> = ({ className }) => {
    return (
        <ProgressiveImage className={className} image={imageFailed} />
    );
};