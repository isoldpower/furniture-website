import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {MaterialsError} from "./MaterialsError";
import {MaterialsFetching} from "./MaterialsFetching";

interface MaterialsLoaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const MaterialsFx: FC<MaterialsLoaderProps> = ({isError, isLoading, children}: MaterialsLoaderProps) => {
    if(isLoading) return <MaterialsFetching />
    else if (isError) return <MaterialsError />

    return (
        <div>
            {children}
        </div>
    );
};