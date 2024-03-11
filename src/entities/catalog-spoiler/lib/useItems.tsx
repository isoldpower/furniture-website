import {ProductData} from "@/entities/product/model";
import {DetailedProductCard} from "@/widgets/detailed-product-card/ui/DetailedProductCard";
import classes from "@/entities/catalog-spoiler/ui/CatalogSpoiler.module.scss";
import {breakpoints, useDocumentSize} from "@/shared/lib";

export const useItems = (products: ProductData[]) => {
    const width = useDocumentSize().x;
    const amount = width >= breakpoints.desktop ? 3 : 2;

    return products.map((product, key) => {
        return key + 1 <= amount
            ? <DetailedProductCard className={`${classes.catalogSpoiler__item} ${classes.important}`} data={product} key={key}/>
            : <div className={`${classes.catalogSpoiler__invisible}`} key={key} />
    })
}