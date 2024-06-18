import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {SideHeaderSectionsError} from "./SideHeaderSectionsError";
import {SideHeaderSectionsFetching} from "./SideHeaderSectionsFetching";

interface SideHeaderSectionsProps {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const SideHeaderSectionsFx: FC<SideHeaderSectionsProps> = ({isError, isLoading, children}) => {
    if(isLoading) return <SideHeaderSectionsFetching />
    else if (isError) return <SideHeaderSectionsError />;

    return children;
};