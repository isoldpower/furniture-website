import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './HeroDecorationsProvider.module.scss';

interface HeroDecorationsProviderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const HeroDecorationsProvider: FC<HeroDecorationsProviderProps> = ({className, children, ...props}: HeroDecorationsProviderProps) => {
    return (
        <div className={`${classes.heroDecorations__wrapper} ${className}`} {...props}>
            <div className={`${classes.heroDecorations__content}`}>
                <div
                    className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageFirst} cc-main-gutter-content cc-pb-7`}>
                    <div className={`${classes.heroDecorations__image}`}/>
                </div>
                {children}
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLeft}`}>
                    <div className={`${classes.heroDecorations__image}`}/>
                </div>
                <div
                    className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLast} cc-main-gutter-content cc-pt-9`}>
                    <div className={`${classes.heroDecorations__image}`}/>
                </div>
            </div>
        </div>
    );
};