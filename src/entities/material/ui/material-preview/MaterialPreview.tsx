import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialPreview.module.scss';
import {Material} from "@/entities/material";
import {AdaptiveLink, ProgressiveImage} from "@/shared/ui";
import {websiteRoutes} from "@/shared/lib";
import {imageApiHandler} from "@/shared/api";

interface MaterialPreviewProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Material;
}

export const MaterialPreview: FC<MaterialPreviewProps> = ({className, data, ...props}: MaterialPreviewProps) => {
    return (
        <div className={`${classes.materialPreview__wrapper} ${className}`} {...props}>
            <AdaptiveLink className={`${classes.materialPreview__content} cc-grid cc-gap-3`} to={websiteRoutes.materials + '#' + data.hrefPostfix.replaceAll('/', '')}>
                <div className={`${classes.materialPreview__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.materialPreview__image} cc-round`} image={imageApiHandler.getItem(data.imageId)} />
                </div>
                <div className={`${classes.materialPreview__title}`}>{data.title}</div>
            </AdaptiveLink>
        </div>
    );
};