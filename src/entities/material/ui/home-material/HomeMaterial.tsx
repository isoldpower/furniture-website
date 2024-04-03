import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './HomeMaterial.module.scss';
import {HomeMaterialData} from "@/entities/material/model";
import {ProgressiveImage} from "@/shared/ui";

interface HomeMaterialProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: HomeMaterialData;
}

export const HomeMaterial: FC<HomeMaterialProps> = ({className, data, ...props}: HomeMaterialProps) => {
    return (
        <div className={`${classes.material__wrapper} ${className}`} {...props}>
            <div className={`${classes.material__content} cc-min-height-1of1 cc-gap-9 cc-laptop-gap-10 cc-p-7`}>
                <div className={`${classes.material__body} cc-grid cc-gap-9 cc-laptop-gap-10`}>
                    <div className={`${classes.material__imageWrapper}`}>
                        <ProgressiveImage className={`${classes.material__image} cc-round`} image={data.image ?? {
                            high: '',
                            low: '',
                            alt: 'undefined'
                        }} />
                    </div>
                    <h3 className={`${classes.material__heading} cc-heading-3`}>{data.title}</h3>
                    <p className={`${classes.material__paragraph}`}>{data.paragraph}</p>
                </div>
                <div className={`${classes.material__buttonWrapper}`}>
                    {data.button}
                </div>
            </div>
        </div>
    );
};