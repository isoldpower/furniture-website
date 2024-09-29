import React, {cloneElement, FC, ReactElement, useMemo, useRef} from 'react';
import {Section, SectionSpoiler} from "@/entities/catalog-section";
import {CatalogSectionPreviewFx} from "@/features/catalog-section";
import {sectionByPostfix} from "@/shared/lib";
import {Carousel, MoreLink} from "@/shared/ui-toolkit";
import classes from "./FeaturedSection.module.scss";
import {useParamsParsed} from "@/app/providers";

type CatalogSectionPreviewProps = {
    data?: Section;
    children: ReactElement;
}

export const FeaturedSection: FC<CatalogSectionPreviewProps> = ({data, children}: CatalogSectionPreviewProps) => {
    const {...query} = useParamsParsed();

    const filteredProducts = useMemo(() => {
        return query.section?.products.filter((product) => product.important) ?? [];
    }, [query.section]);

    const button = useRef(
        <MoreLink to={sectionByPostfix(data?.href_postfix)}>Смотреть все товары</MoreLink>
    );

    return data ? (
        <CatalogSectionPreviewFx {...query} section={data}>
            <div className={`${classes.featuredSection__large}`}>
                <SectionSpoiler button={button.current} data={data} sectionLink>
                    {filteredProducts?.map((product, key) =>
                        cloneElement(children, {...children.props, key, data: product})
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
                            {cloneElement(children, {...children.props, data: product})}
                        </div>
                    ))}
                </Carousel>
            </div>
        </CatalogSectionPreviewFx>
    ) : undefined;
};
