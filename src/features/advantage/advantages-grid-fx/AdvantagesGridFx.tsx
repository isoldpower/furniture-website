import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {AdvantagesGridFetching} from "./AdvantagesGridFetching";
import {AdvantagesGridError} from "./AdvantagesGridError";

type AdvantagesGridFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const AdvantagesGridFx: FC<AdvantagesGridFxProps> = ({isError, isLoading, children}: AdvantagesGridFxProps) => {
    if (isLoading) return <AdvantagesGridFetching />
    else if (isError) return <AdvantagesGridError />

    return children;
};