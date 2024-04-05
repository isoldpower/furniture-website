import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PageTitle.module.scss';
import {useLocation} from "react-router-dom";
import {PagePath} from "@/features";
import {useNavigationTree} from "@/shared/lib";

interface PageTitleData {
}

interface PageTitleProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: PageTitleData;
}

export const PageTitle: FC<PageTitleProps> = ({className, ...props}: PageTitleProps) => {
    const pathName = useLocation().pathname;
    const path = pathName.endsWith('/') ? pathName.slice(0, pathName.length - 1) : pathName;
    const navigationTree = useNavigationTree(path);

    return (
        <div className={`${classes.pageTitle__wrapper} ${className}`} {...props}>
            <div className={`${classes.pageTitle__content}`}>
                <PagePath className={`${classes.pageTitle__path} cc-pb-2`}/>
                <h1 className={`${classes.pageTitle__heading} cc-heading-2`}>{navigationTree.pageName}</h1>
            </div>
        </div>
    );
};