import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {CatalogPreviewListFetching} from "./CatalogPreviewListFetching";
import {CatalogPreviewListError} from "./CatalogPreviewListError";

type CatalogPreviewListFxProps = {
    isError?: boolean;
    isLoading?: boolean;
    children: ReactNode;
}

export const CatalogPreviewListFx: FC<CatalogPreviewListFxProps> = ({isLoading, isError, children}: CatalogPreviewListFxProps) => {
    if (isLoading) return <CatalogPreviewListFetching />;
    else if (isError) return <CatalogPreviewListError />;

    return children;
};