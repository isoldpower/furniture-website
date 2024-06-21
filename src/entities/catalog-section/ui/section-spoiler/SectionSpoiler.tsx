import {Children, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './SectionSpoiler.module.scss';
import {useSectionsList} from "../../lib";
import {Section} from "@/entities/catalog-section";

type CatalogSpoilerProps = {
    data: Section;
    children: ReactNode;
    sectionLink?: boolean;
    button?: ReactNode;
}

export const SectionSpoiler: FC<CatalogSpoilerProps> = ({data, children, sectionLink, button}: CatalogSpoilerProps) => {
    return (
        <div className={`${classes.catalogSpoiler__wrapper} cc-main-gutter`}>
            <div className={`${classes.catalogSpoiler__content} cc-width-1of1 cc-grid`}>
                <h2 className={`${classes.catalogSpoiler__heading} cc-heading-2 cc-pb-7`}>{data.title}</h2>
                <div className={`${classes.catalogSpoiler__largeWrapper} cc-flex gap-column-spacing`}>
                    {useSectionsList(Children.toArray(children), sectionLink)}
                    {sectionLink ? (
                        <div className={`${classes.catalogSpoiler__moreLink}`}>
                            {button}
                        </div>
                    ): undefined}
                </div>
            </div>
        </div>
    );
};