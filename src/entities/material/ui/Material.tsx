import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Material.module.scss';
import {MaterialDisplayData} from "@/entities/material/model";

interface MaterialProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: MaterialDisplayData;
}

export const Material: FC<MaterialProps> = ({className, data, ...props}: MaterialProps) => {
    return (
        <div className={`${classes.material__wrapper} ${className}`} {...props}>
            <div className={`${classes.material__content} cc-min-height-1of1 cc-gap-9 cc-laptop-gap-10 cc-p-7`}>
                <div className={`${classes.material__body} cc-grid cc-gap-9 cc-laptop-gap-10`}>
                    <div className={`${classes.material__imageWrapper}`}>
                        <img alt="undefined" className={`${classes.material__image} cc-round`} src={data.src}/>
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