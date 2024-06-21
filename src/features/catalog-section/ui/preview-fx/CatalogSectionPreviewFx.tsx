import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {CatalogSectionPreviewFetching} from "./CatalogSectionPreviewFetching";
import {CatalogSectionPreviewError} from "./CatalogSectionPreviewError";
import {Section} from "@/entities/catalog-section";

type CatalogSectionLoaderProps = {
    isLoading?: boolean;
    isError?: boolean;
    children?: ReactNode;
    section: Section;
}

export const CatalogSectionPreviewFx: FC<CatalogSectionLoaderProps> = ({isLoading, isError, section, children}: CatalogSectionLoaderProps) => {
    if (isLoading) return <CatalogSectionPreviewFetching section={section} />
    else if (isError) return <CatalogSectionPreviewError section={section} />

    return children;
};