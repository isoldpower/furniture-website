import {FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import {AboutImageFetching} from "./AboutImageFetching";
import {AboutImageError} from "./AboutImageError";

type AboutImageFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactElement;
}

export const AboutImageFx: FC<AboutImageFxProps> = ({children, isLoading, isError}: AboutImageFxProps) => {
    if (isLoading) return <AboutImageFetching className={children.props.className} />;
    else if (isError) return <AboutImageError className={children.props.className} />;

    return children;
};