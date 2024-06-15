import {FC} from 'react';
import {Section} from "@/entities/catalog-section";

interface CatalogSectionPreviewErrorProps {
    section: Section;
}

export const CatalogSectionPreviewError: FC<CatalogSectionPreviewErrorProps> = ({section}: CatalogSectionPreviewErrorProps) => {
    return (
        <div className="cc-fs-500">Ошибка {section?.title}</div>
    );
};