import React, {FC, useMemo, useRef} from 'react';
import {Section, SectionSpoiler} from "@/entities/catalog-section";
import {CatalogSectionPreviewFx} from "@/features/catalog-section";
import {DetailedProductCard, useGetAllProductsQuery} from "@/widgets/product";
import {breakpoints, sectionByPostfix, useDocumentSize} from "@/shared/lib";
import {Carousel, MoreLink} from "@/shared/ui-toolkit";
import {Product} from "@/entities/product";
import classes from "./FeaturedSection.module.scss";

interface CatalogSectionPreviewProps {
    data?: Section;
}

export const FeaturedSection: FC<CatalogSectionPreviewProps> = ({data}: CatalogSectionPreviewProps) => {
    const width = useDocumentSize();
    const {...query} = useGetAllProductsQuery();

    const filteredProducts = useMemo(() => {
        return query.currentData
            ?.filter(product => product.section.id == data?.id);
    }, [data, query.currentData]);

    const importantProducts = useMemo(() => {
        return filteredProducts
            ?.filter(product => product.important);
    }, [filteredProducts]);

    const button = useRef(
        <MoreLink to={sectionByPostfix(data?.href_postfix)}>Смотреть все товары</MoreLink>
    );

    return data ? (
        <CatalogSectionPreviewFx {...query} section={data}>
            {width.x >= breakpoints.laptop
                ? <SectionSpoiler button={button.current} data={data} sectionLink>
                    {importantProducts?.map((product: Product, key) => (
                        <DetailedProductCard data={product} key={key} />
                    ))}
                </SectionSpoiler>
                : <Carousel
                    button={<div className={`${classes.catalogDisplay__button} cc-grid cc-pt-7`}>{button.current}</div>}
                    id={data.id.toString()}
                    indicators
                    itemClass={`${classes.carouselList__item}`}
                    title={<h2 className={`${classes.catalogDisplay__heading} cc-heading-2`}>{data.title}</h2>}>
                    {filteredProducts.map((product: Product, key) => (
                        <DetailedProductCard data={product} key={key}/>
                    ))}
                </Carousel>
            }
        </CatalogSectionPreviewFx>
    ) : undefined;
};
