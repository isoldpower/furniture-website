import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSpoiler.module.scss';
import {CatalogSpoilerData} from "../model";
import {useChildren} from "../lib";

interface CatalogSpoilerProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: CatalogSpoilerData;
    children: ReactNode[];
}

export const CatalogSpoiler: FC<CatalogSpoilerProps> = ({className, data, children, ...props}: CatalogSpoilerProps) => {
    return (
        <div className={`${classes.catalogSpoiler__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalogSpoiler__content} cc-main-gutter-content cc-grid`}>
                <h2 className={`${classes.catalogSpoiler__heading} cc-heading-2 cc-pb-7`}>{data.title}</h2>
                <div className={`${classes.catalogSpoiler__largeWrapper} cc-flex gap-column-spacing`}>
                    {useChildren(children)}
                    <div className={`${classes.catalogSpoiler__moreLink}`}>
                        {data.button}
                    </div>
                </div>
            </div>
        </div>
    );
};