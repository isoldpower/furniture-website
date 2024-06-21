import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSectionPreviewList.module.scss';
import {AdaptiveLink, List} from "@/shared/ui-toolkit";
import {CatalogSectionCard} from "@/entities/catalog-section";
import {CatalogPreviewListFx, useGetAllSectionsQuery} from "@/features/catalog-section";

export const CatalogSectionPreviewList: FC = () => {
    const {...query} = useGetAllSectionsQuery();

    return (
        <CatalogPreviewListFx {...query}>
            <List className={`${classes.catalog__sectionsGrid} cc-grid cc-gap-5`}>
                {query.currentData?.map((section, key) => (
                    <AdaptiveLink key={key} to={`/catalog${section.href_postfix}`}>
                        <CatalogSectionCard data={section}/>
                    </AdaptiveLink>
                ))}
            </List>
        </CatalogPreviewListFx>
    );
};