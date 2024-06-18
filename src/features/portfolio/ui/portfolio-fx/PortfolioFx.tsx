import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {PortfolioFetching} from "./PortfolioFetching";
import {PortfolioError} from "./PortfolioError";

interface PortfolioLoaderProps {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const PortfolioFx: FC<PortfolioLoaderProps> = ({isLoading, isError, children}: PortfolioLoaderProps) => {
    if(isLoading) return <PortfolioFetching />;
    else if (isError) return <PortfolioError />;

    return children;
};