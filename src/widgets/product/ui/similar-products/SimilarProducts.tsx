import React, {FC} from "react";
import '@/app/scss/main.scss';
import classes from "./SimilarProducts.module.scss";
import {Product} from "@/entities/product";
import {DetailedProductCard} from "@/widgets/product";
import {SectionSpoiler} from "@/entities/catalog-section";
import {Carousel} from "@/shared/ui-toolkit";

interface SimilarProductsProps {
    current: Product;
    products: Product[];
}

export const SimilarProducts: FC<SimilarProductsProps> = ({current, products}: SimilarProductsProps) => {
    const similarProducts = products?.filter(item => {
        const isSameSection = item.section?.id == current?.section?.id;
        const isNotCurrent = item.id != current?.id;
        return isSameSection && isNotCurrent;
    });

    return current ? (
        <div className={`${classes.productPage__sectionPreview}`}>
            <div className={`${classes.similarProducts__largeDisplay}`}>
                <SectionSpoiler data={current?.section}>
                    {similarProducts?.map((product: Product, key) => (
                        <DetailedProductCard data={product} key={key} />
                    ))}
                </SectionSpoiler>
            </div>
            <div className={`${classes.similarProducts__smallDisplay}`}>
                <Carousel id={current?.id.toString()}
                    itemClass={`${classes.catalogDisplay__item}`}
                    title={<h2 className={`${classes.catalogDisplay__heading} cc-heading-2`}>Похожее</h2>}>
                    {similarProducts?.map((product: Product, key) => (
                        <DetailedProductCard data={product} key={key}/>
                    ))}
                </Carousel>
            </div>
        </div>) : undefined;
};