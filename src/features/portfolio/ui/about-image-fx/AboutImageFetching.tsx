import {FC} from "react";
import '@/app/scss/main.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {imageDefault} from "@/shared/lib";

export const AboutImageFetching: FC = () => {
    return (
        <ProgressiveImage image={imageDefault} />
    );
};