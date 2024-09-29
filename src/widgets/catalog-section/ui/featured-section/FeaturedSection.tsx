import React, {cloneElement, FC, ReactElement, useMemo, useRef} from 'react';
import {Section, SectionSpoiler} from "@/entities/catalog-section";
import {CatalogSectionPreviewFx} from "@/features/catalog-section";
import {sectionByPostfix} from "@/shared/lib";
import {Carousel, MoreLink} from "@/shared/ui-toolkit";
import classes from "./FeaturedSection.module.scss";
import {useGetSectionQuery} from "@/widgets/catalog-section";

type CatalogSectionPreviewProps = {
    data?: Section;
    children: ReactElement;
}

export const FeaturedSection: FC<CatalogSectionPreviewProps> = ({data, children}: CatalogSectionPreviewProps) => {
    const {...detailsQuery} = useGetSectionQuery(data.id);

    const filteredProducts = useMemo(() => {
        return detailsQuery.currentData?.products?.filter((product) => product.important) ?? [];
    }, [detailsQuery]);

    const button = useRef(
        <MoreLink to={sectionByPostfix(data?.href_postfix)}>Смотреть все товары</MoreLink>
    );

    return data ? (
        <CatalogSectionPreviewFx {...detailsQuery} section={data}>
            <div className={`${classes.featuredSection__large}`}>
                <SectionSpoiler button={button.current} data={data} sectionLink>
                    {filteredProducts?.map((product, key) =>
                        cloneElement(children, {...children.props, key, data: product, section: data})
                    )}
                </SectionSpoiler>
            </div>
            <div className={`${classes.featuredSection__small}`}>
                <Carousel
                    button={<div className={`${classes.catalogDisplay__button} cc-grid cc-pt-7`}>{button.current}</div>}
                    id={data.id.toString()}
                    indicators
                    title={<h2 className={`${classes.catalogDisplay__heading} cc-heading-2`}>{data.title}</h2>}>
                    {filteredProducts?.map((product, key) => (
                        <div className={classes.carouselList__item} key={key}>
                            {cloneElement(children, {...children.props, data: product, section: data})}
                        </div>
                    ))}
                </Carousel>
            </div>
        </CatalogSectionPreviewFx>
    ) : undefined;
};
