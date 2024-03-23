import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './AdaptiveLink.module.scss';
import {HashLink, HashLinkProps} from "react-router-hash-link";

interface AdaptiveLinkProps extends HashLinkProps {
    scrollOffset?: number;
    to: string;
}

export const AdaptiveLink: FC<AdaptiveLinkProps> = ({className, children, scrollOffset, ...props}: AdaptiveLinkProps) => {
    const scrollWithOffset = (e: HTMLElement) => {
        const yCoordinate = e.getBoundingClientRect().top + window.pageYOffset;
        const offset = scrollOffset ?? -100;
        window.scrollTo({ top: yCoordinate + offset, behavior: 'smooth'});
    }
    if (props.to.includes('#') === false) props.to = props.to.concat('#top')

    return (
        <HashLink className={`${classes.adaptiveLink__wrapper} ${className}`} scroll={e => scrollWithOffset(e)} {...props}>
            <div className={`${classes.adaptiveLink__content} ${className}`} tabIndex={0}>
                {children}
            </div>
        </HashLink>
    );
};