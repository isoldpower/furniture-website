import {FC} from 'react';
import {Section} from "@/entities/catalog-section";

interface CatalogSectionPreviewFetchingProps {
    section: Section;
}

export const CatalogSectionPreviewFetching: FC<CatalogSectionPreviewFetchingProps> = ({section}: CatalogSectionPreviewFetchingProps) => {
    return (
        <div className="cc-fs-500">Идет загрузка {section?.title}...</div>
    );
};