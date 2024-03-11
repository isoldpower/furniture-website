import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSpoiler.module.scss';
import {CatalogSpoilerData} from "@/entities/catalog-spoiler/model";
import {useItems} from "../lib";
import {MoreLink} from "@/shared/ui";

interface CatalogSpoilerProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: CatalogSpoilerData;
}

export const CatalogSpoiler: FC<CatalogSpoilerProps> = ({className, data, ...props}: CatalogSpoilerProps) => {
    return (
        <div className={`${classes.catalogSpoiler__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalogSpoiler__content} cc-main-gutter-content cc-grid`}>
                <h2 className={`${classes.catalogSpoiler__heading} cc-heading-2 cc-pb-7`}>{data.title}</h2>
                <div className={`${classes.catalogSpoiler__largeWrapper} cc-flex gap-column-spacing`}>
                    {useItems(data.products)}
                    <MoreLink className={`${classes.catalogSpoiler__moreLink}`} to={data.href}>Смотреть все товары</MoreLink>
                </div>
            </div>
        </div>
    );
};