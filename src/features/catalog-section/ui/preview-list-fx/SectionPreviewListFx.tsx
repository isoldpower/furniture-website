import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {SectionPreviewListFetching} from "./SectionPreviewListFetching";
import {SectionPreviewListError} from "./SectionPreviewListError";

type CatalogLoaderProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const SectionPreviewListFx: FC<CatalogLoaderProps> = ({isError, isLoading, children}: CatalogLoaderProps) => {
    if (isLoading) return <SectionPreviewListFetching />;
    else if (isError) return <SectionPreviewListError />;

    return children;
};