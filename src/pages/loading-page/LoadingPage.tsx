import {FC} from "react";
import classes from './LoadingPage.module.scss';
import {Load} from "@/shared/icons";

export const LoadingPage: FC = () => {
    return (
        <div className={`${classes.loadingPage__content}`}>
            <h2 className={classes.loadingPage__heading}>Загружаем страницу...</h2>
            <Load className={classes.loadingPage__loader} height={48} width={48}/>
        </div>
    );
};