import React, {FC, useMemo} from "react";
import '@/app/scss/main.scss';
import classes from "./SimilarProducts.module.scss";
import {Product} from "@/entities/product";
import {DetailedProductCard} from "@/widgets/product";
import {Section, SectionSpoiler} from "@/entities/catalog-section";
import {Carousel} from "@/shared/ui-toolkit";
import {useGetSectionQuery} from "@/widgets/catalog-section";

interface SimilarProductsProps {
    section: Section;
    current: Product;
}

export const SimilarProducts: FC<SimilarProductsProps> = ({section, current}: SimilarProductsProps) => {
    const {...sectionQuery} = useGetSectionQuery(section?.id);
    const similarProducts = useMemo(() => {
        return sectionQuery.currentData?.products
            ?.filter((product: Product) => product.id !== current?.id)
    }, [sectionQuery.currentData?.products, current?.id]);

    return current ? (
        <div className={`${classes.productPage__sectionPreview}`}>
            <div className={`${classes.similarProducts__largeDisplay}`}>
                <SectionSpoiler data={section}>
                    {similarProducts?.map((product: Product, key) => (
                        <DetailedProductCard data={product} key={key} section={section} />
                    ))}
                </SectionSpoiler>
            </div>
            <div className={`${classes.similarProducts__smallDisplay}`}>
                <Carousel id={current?.id.toString()} title={(
                    <h2 className={`${classes.catalogDisplay__heading} cc-heading-2`}>Похожее</h2>
                )}>
                    {similarProducts?.map((product: Product, key) => (
                        <div className={`${classes.catalogDisplay__item}`} key={key}>
                            <DetailedProductCard data={product} section={section} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>) : undefined;
};