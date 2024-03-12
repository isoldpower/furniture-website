import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Material.module.scss';
import {MaterialDisplayData} from "@/entities/material/model";
import {MoreLink} from "@/shared/ui";

interface MaterialProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: MaterialDisplayData;
}

export const Material: FC<MaterialProps> = ({className, data, ...props}: MaterialProps) => {
    return (
        <div className={`${classes.material__wrapper} ${className}`} {...props}>
            <div className={`${classes.material__content} cc-p-7`}>
                <div className={`${classes.material__body} cc-grid cc-gap-9`} />
                <div className={`${classes.material__buttonWrapper}`}>
                    <MoreLink to={data.href}>{data.buttonText}</MoreLink>
                </div>
            </div>
        </div>
    );
};