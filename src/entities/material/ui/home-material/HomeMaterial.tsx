import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './HomeMaterial.module.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {Material} from "@/entities/material";
import {imageFailed} from "@/shared/lib";

type HomeMaterialProps = {
    data?: Material;
    button: ReactNode;
}

export const HomeMaterial: FC<HomeMaterialProps> = ({data, button}: HomeMaterialProps) => {
    return data ? (
        <div className={`${classes.material__content} cc-width-1of1 cc-min-height-1of1 cc-gap-9 cc-laptop-gap-10 cc-p-7`}>
            <div className={`${classes.material__body} cc-flex cc-flex-col cc-gap-9 cc-laptop-gap-10`}>
                <div className={`${classes.material__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.material__image} cc-round`} image={data.image ?? imageFailed} />
                </div>
                <h3 className={`${classes.material__heading} cc-heading-3`}>{data.title}</h3>
                <p className={`${classes.material__paragraph}`}>{data.paragraph}</p>
            </div>
            <div className={`${classes.material__buttonWrapper}`}>
                {button}
            </div>
        </div>
    ) : undefined;
};