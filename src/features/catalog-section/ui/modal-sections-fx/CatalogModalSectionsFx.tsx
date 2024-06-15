import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogModalSectionsFx.module.scss';
import {CatalogModalSectionsFetching} from "./CatalogModalSectionsFetching";
import {CatalogModalSectionsError} from "./CatalogModalSectionsError";

interface CatalogModalSectionsProps {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const CatalogModalSectionsFx: FC<CatalogModalSectionsProps> = ({isError, isLoading, children}: CatalogModalSectionsProps) => {
    if(isLoading) return <CatalogModalSectionsFetching />;
    else if (isError) return <CatalogModalSectionsError />;

    return (
        <div className={classes.catalogModal__catalog}>{children}</div>
    )
};