import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {MaterialAdvantagesError} from "./MaterialAdvantagesError";
import {MaterialAdvantagesFetching} from "./MaterialAdvantagesFetching";

type MaterialOverviewAdvantagesProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const MaterialAdvantagesFx: FC<MaterialOverviewAdvantagesProps> = ({isError, isLoading, children}: MaterialOverviewAdvantagesProps) => {
    if(isLoading) return <MaterialAdvantagesFetching />
    else if (isError) return <MaterialAdvantagesError />

    return children;
};