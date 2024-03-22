import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PageTitle.module.scss';
import {useLocation} from "react-router-dom";
import {PagePath} from "@/features";
import {getPageByRoute} from "@/shared/lib";

interface PageTitleData {
}

interface PageTitleProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: PageTitleData;
}

export const PageTitle: FC<PageTitleProps> = ({className, ...props}: PageTitleProps) => {
    const path = useLocation().pathname;
    const pageName = getPageByRoute(path);

    return (
        <div className={`${classes.pageTitle__wrapper} ${className}`} {...props}>
            <div className={`${classes.pageTitle__content}`}>
                <PagePath className={`${classes.pageTitle__path} cc-pb-2`}/>
                <h1 className={`${classes.pageTitle__heading} cc-heading-2`}>{pageName}</h1>
            </div>
        </div>
    );
};