import {BaseHTMLAttributes, FC} from "react";
import classes from './LoadingPage.module.scss';
import {Load} from "@/shared/icons";

interface LoadingPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const LoadingPage: FC<LoadingPageProps> = ({className, ...props}: LoadingPageProps) => {
    return (
        <div className={`${classes.loadingPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.loadingPage__content}`}>
                <h2 className={classes.loadingPage__heading}>Загружаем страницу...</h2>
                <Load className={classes.loadingPage__loader} height={48} width={48}/>
            </div>
        </div>
    );
};