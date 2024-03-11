import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PagePath.module.scss';
import {PagePathData} from "@/features/page-path/model";
import {Link, useLocation} from "react-router-dom";
import {nameByRoute} from "src/shared/lib/constants";
import {Slash} from "@/shared/icons";
import {getPathChunks} from "@/features/page-path/lib";

interface PagePathProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: PagePathData;
}

export const PagePath: FC<PagePathProps> = ({className, ...props}: PagePathProps) => {
    const path = useLocation().pathname;
    const chunks = getPathChunks(path);

    return (
        <nav className={`${classes.pagePath__wrapper} ${className}`} {...props}>
            {chunks.map((path, key) => {
                return key < chunks.length - 1
                    ? <div className={`${classes.pagePath__chunkWrapper} cc-flex cc-align-items-center cc-gap-1`} key={key}>
                        <Link className={`${classes.pagePath__chunkLink}`} to={path}>
                            {nameByRoute(path)}
                        </Link>
                        <Slash className={`${classes.pagePath__chunkSeparator}`} height={16} width={16} />
                    </div>
                    : <div key={key} />
            })}
        </nav>
    );
};