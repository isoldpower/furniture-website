import classes from './HeroDecorationsProvider.module.scss';
import '@/app/scss/main.scss';
import {BaseHTMLAttributes, FC} from "react";
import {ProgressiveImage} from "@/shared/ui";
import {heroImages} from "@/pages/home/api";

interface HeroDecorationsProviderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const HeroDecorationsProvider: FC<HeroDecorationsProviderProps> = ({className, children, ...props}: HeroDecorationsProviderProps) => {
    return (
        <div className={`${classes.heroDecorations__wrapper} ${className}`} {...props}>
            <div className={`${classes.heroDecorations__content}`}>
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageFirst} cc-main-gutter-content cc-pb-7`}>
                    <ProgressiveImage image={heroImages[0]} className={`${classes.heroDecorations__image}`}/>
                </div>
                {children}
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLeft}`}>
                    <ProgressiveImage image={heroImages[1]} className={`${classes.heroDecorations__image}`}/>
                </div>
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLast} cc-main-gutter-content cc-pt-9`}>
                    <ProgressiveImage image={heroImages[2]} className={`${classes.heroDecorations__image}`}/>
                </div>
            </div>
        </div>
    );
};