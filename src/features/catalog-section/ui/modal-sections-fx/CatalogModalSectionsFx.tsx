import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {CatalogModalSectionsFetching} from "./CatalogModalSectionsFetching";
import {CatalogModalSectionsError} from "./CatalogModalSectionsError";

type CatalogModalSectionsProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const CatalogModalSectionsFx: FC<CatalogModalSectionsProps> = ({isError, isLoading, children}: CatalogModalSectionsProps) => {
    if(isLoading) return <CatalogModalSectionsFetching />;
    else if (isError) return <CatalogModalSectionsError />;

    return children;
};