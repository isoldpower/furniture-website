import {FC} from "react";
import '@/app/scss/main.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {imageFailed} from "@/shared/lib";

export const AboutImageError: FC = () => {
    return (
        <ProgressiveImage image={imageFailed} />
    );
};