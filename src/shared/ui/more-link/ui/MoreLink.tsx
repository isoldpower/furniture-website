import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MoreLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {Reference} from "@/shared/icons";

interface MoreLinkProps extends LinkProps {
}

export const MoreLink: FC<MoreLinkProps> = ({className, children, ...props}: MoreLinkProps) => {
    return (
        <Link className={`${classes.moreLink__wrapper} ${className}`} {...props}>
            <div className={`${classes.moreLink__content} cc-flex cc-width-1of1 cc-align-items-center cc-justify-content-center cc-gap-1`} tabIndex={0}>
                {children}
                <span className={`${classes.moreLink__arrowWrapper}`}>
                    <Reference  className={`${classes.moreLink__arrow}`} height={16} width={16}/>
                </span>
            </div>
        </Link>
    );
};