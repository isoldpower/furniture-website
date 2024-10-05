import {FC} from "react";
import '@/app/scss/main.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {imageDefault} from "@/shared/lib";

type AboutImageFetchingProps = {
    className: string;
}

export const AboutImageFetching: FC<AboutImageFetchingProps> = ({ className }) => {
    return (
        <ProgressiveImage className={className} image={imageDefault} />
    );
};