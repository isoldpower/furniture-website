import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './AdaptiveLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

interface AdaptiveLinkProps extends LinkProps {
    scrollOffset?: number;
    to: string;
}

export const AdaptiveLink: FC<AdaptiveLinkProps> = ({className, children, ...props}: AdaptiveLinkProps) => {
    if (props.to.includes('#') === false) props.to = props.to.concat('#top');

    return (
        <Link className={`${classes.adaptiveLink__wrapper} ${className}`} {...props}>
            <div className={`${classes.adaptiveLink__content} ${className}`} tabIndex={0}>
                {children}
            </div>
        </Link>
    );
};