import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialPreview.module.scss';
import {Material} from "@/entities/material";
import {AdaptiveLink, ProgressiveImage} from "@/shared/ui-toolkit";
import {imageFailed, websiteRoutes} from "@/shared/lib";

type MaterialPreviewProps = {
    data?: Material;
}

export const MaterialPreview: FC<MaterialPreviewProps> = ({data}: MaterialPreviewProps) => {
    const href = websiteRoutes.materials + '#' + data.href_postfix.replaceAll('/', '');

    return data ? (
        <div className={`${classes.materialPreview__wrapper}`}>
            <AdaptiveLink className={`${classes.materialPreview__content} cc-grid cc-gap-3`} to={href}>
                <div className={`${classes.materialPreview__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.materialPreview__image} cc-round`} image={data.image ?? imageFailed} />
                </div>
                <div className={`${classes.materialPreview__title}`}>{data.title}</div>
            </AdaptiveLink>
        </div>
    ) : undefined;
};