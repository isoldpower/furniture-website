import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './AdaptiveLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

interface AdaptiveLinkProps extends LinkProps {
}

export const AdaptiveLink: FC<AdaptiveLinkProps> = ({className, children, ...props}: AdaptiveLinkProps) => {
    return (
        <Link className={`${classes.adaptiveLink__wrapper} ${className}`} {...props}>
            <div className={`${classes.adaptiveLink__content}`} tabIndex={0}>
                {children}
            </div>
        </Link>
    );
};