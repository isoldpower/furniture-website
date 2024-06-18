import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {MaterialAdvantagesError} from "./MaterialAdvantagesError";
import {MaterialAdvantagesFetching} from "./MaterialAdvantagesFetching";

interface MaterialOverviewAdvantagesProps extends BaseHTMLAttributes<HTMLDivElement> {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const MaterialAdvantagesFx: FC<MaterialOverviewAdvantagesProps> = ({isError, isLoading, children, ...props}: MaterialOverviewAdvantagesProps) => {
    if(isLoading) return <MaterialAdvantagesFetching />
    else if (isError) return <MaterialAdvantagesError />

    return (
        <div {...props}>
            {children}
        </div>
    );
};