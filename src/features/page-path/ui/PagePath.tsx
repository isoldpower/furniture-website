import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PagePath.module.scss';
import {useLocation} from "react-router-dom";
import {Slash} from "@/shared/icons";
import {PagePathData} from "../model";
import {getPathChunks} from "../lib";
import {AdaptiveLink} from "@/shared/ui";
import {useNavigationTree} from "@/shared/lib";

interface PagePathProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: PagePathData;
}

export const PagePath: FC<PagePathProps> = ({className, ...props}: PagePathProps) => {
    const pathName = useLocation().pathname;
    const path = pathName.endsWith('/') ? pathName.slice(0, pathName.length - 1) : pathName;
    const chunks = getPathChunks(path);

    return (
        <nav className={`${classes.pagePath__wrapper} ${className} cc-flex`} {...props}>
            {chunks.map((path, key) => {
                return key < chunks.length - 1
                    ? <div className={`${classes.pagePath__chunkWrapper} cc-flex cc-align-items-center cc-gap-1`} key={key}>
                        <AdaptiveLink className={`${classes.pagePath__chunkLink}`} to={path}>
                            {useNavigationTree(path).pageName}
                        </AdaptiveLink>
                        <Slash className={`${classes.pagePath__chunkSeparator}`} height={16} width={16} />
                    </div>
                    : <div key={key} />
            })}
        </nav>
    );
};