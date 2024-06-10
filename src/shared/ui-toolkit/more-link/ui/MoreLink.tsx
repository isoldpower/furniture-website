import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MoreLink.module.scss';
import {Reference} from "@/shared/icons";
import {AdaptiveLink} from "@/shared/ui-toolkit";
import {LinkProps} from "react-router-dom";

interface MoreLinkProps extends LinkProps {
    to: string;
}

export const MoreLink: FC<MoreLinkProps> = ({className, children, ...props}: MoreLinkProps) => {
    return (
        <AdaptiveLink className={`${classes.moreLink__wrapper} ${className} cc-px-4 cc-py-3 cc-border-radius-1`} {...props}>
            <div className={`${classes.moreLink__content} cc-flex cc-width-1of1 cc-align-items-center cc-justify-content-center cc-gap-1`}>
                {children}
                <span className={`${classes.moreLink__arrowWrapper}`}>
                    <Reference  className={`${classes.moreLink__arrow}`} height={16} width={16}/>
                </span>
            </div>
        </AdaptiveLink>
    );
};