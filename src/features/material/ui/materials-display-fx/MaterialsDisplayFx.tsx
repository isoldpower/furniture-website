import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {MaterialsDisplayFetching} from "./MaterialsDisplayFetching";
import {MaterialsDisplayError} from "./MaterialsDisplayError";

type MaterialsDisplayFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const MaterialsDisplayFx: FC<MaterialsDisplayFxProps> = ({isLoading, isError, children}: MaterialsDisplayFxProps) => {
    if (isLoading) return <MaterialsDisplayFetching />;
    else if (isError) return <MaterialsDisplayError />;

    return children;
};