import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ErrorPage.module.scss';
import {Button} from "@/shared/ui-toolkit";
import {websiteRoutes} from "@/shared/lib";

interface ErrorPageProps extends BaseHTMLAttributes<HTMLDivElement> {
    paragraph?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({className, paragraph, ...props}: ErrorPageProps) => {
    return (
        <div className={`${classes.errorPage__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.errorPage__content} cc-grid cc-gap-9 cc-pt-13 cc-laptop-pt-15`}>
                <h1 className="cc-heading-1">Упс...</h1>
                <p className="cc-text-gutter">{paragraph ?? 'Похоже, вы наткнулись на страницу, на которой не должны были оказаться. Если вы не производили никаких манипуляций с поисковой строкой и уверены в правильности адреса - сообщите нам об ошибке'}</p>
                <div className="cc-flex cc-gap-4">
                    <Button data={{variant: 'accent'}} semantic="link" to={websiteRoutes.home}>На главную страницу</Button>
                    <Button data={{variant: 'primary'}} onClick={() => prompt('error message mock')} semantic="button">Сообщить об ошибке</Button>
                </div>
            </div>
        </div>
    );
};