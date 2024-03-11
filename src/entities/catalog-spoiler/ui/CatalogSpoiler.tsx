import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSpoiler.module.scss';
import {breakpoints} from "@/shared/lib";
import {DetailedProductCard} from "@/widgets/detailed-product-card/ui/DetailedProductCard";
import {MoreLink} from "@/shared/ui";
import {CatalogSpoilerData} from "@/entities/catalog-spoiler/model";

interface CatalogSpoilerProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: CatalogSpoilerData;
}

export const CatalogSpoiler: FC<CatalogSpoilerProps> = ({className, data, ...props}: CatalogSpoilerProps) => {
    return (
        <div className={`${classes.catalogDisplay__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalogDisplay__content} cc-main-gutter-content cc-grid`}>
                <h2 className={`${classes.catalogDisplay__heading} cc-heading-2 cc-pb-7`}>{data.title}</h2>
                <div className={`${classes.catalogDisplay__largeWrapper} cc-flex gap-column-spacing`}>
                    {data.products.map((product, key) => {
                        const amount = width >= breakpoints.desktop ? 3 : 2;
                        return key + 1 <= amount
                            ? <DetailedProductCard data={product} key={key}
                                                   className={`${classes.catalogDisplay__item} ${classes.important}`}/>
                            : <></>
                    })}
                    <MoreLink to={data.href} className={`${classes.catalogDisplay__moreLink}`}>Смотреть все
                        товары</MoreLink>
                </div>
            </div>
        </div>
    );
};