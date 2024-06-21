import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {ProcessGridFetching} from "./ProcessGridFetching";
import {ProcessGridError} from "./ProcessGridError";

type ProcessGridFxProps = {
    isError?: boolean;
    isLoading?: boolean;
    children: ReactNode;
}

export const ProcessGridFx: FC<ProcessGridFxProps> = ({isError, children, isLoading}: ProcessGridFxProps) => {
    if (isLoading) return <ProcessGridFetching />
    else if (isError) return <ProcessGridError />

    return children;
};