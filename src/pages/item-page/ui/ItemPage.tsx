import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ItemPage.module.scss';
import {PageTitle} from "@/widgets";

interface ItemPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const ItemPage: FC<ItemPageProps> = ({className, ...props}: ItemPageProps) => {
    return (
        <div className={`${classes.itemPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.itemPage__content}`}>
                <PageTitle />
            </div>
        </div>
    );
};