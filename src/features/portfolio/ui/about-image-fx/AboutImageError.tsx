import {FC} from "react";
import '@/app/scss/main.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {imageFailed} from "@/shared/lib";

type AboutImageErrorProps = {
    className: string;
}

export const AboutImageError: FC<AboutImageErrorProps> = ({ className }) => {
    return (
        <ProgressiveImage className={className} image={imageFailed} />
    );
};