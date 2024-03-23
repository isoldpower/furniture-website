import classes from './HeroDecorationsProvider.module.scss';
import '@/app/scss/main.scss';
import {BaseHTMLAttributes, FC} from "react";
import {ProgressiveImage} from "@/shared/ui";
import {heroImages} from "@/pages/home-page/api";

interface HeroDecorationsProviderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const HeroDecorationsProvider: FC<HeroDecorationsProviderProps> = ({className, children, ...props}: HeroDecorationsProviderProps) => {
    return (
        <div className={`${classes.heroDecorations__wrapper} ${className}`} {...props}>
            <div className={`${classes.heroDecorations__content}`}>
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageFirst} cc-pb-7`}>
                    <ProgressiveImage className={`${classes.heroDecorations__image}`} image={heroImages[0]}/>
                </div>
                {children}
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLeft}`}>
                    <ProgressiveImage className={`${classes.heroDecorations__image}`} image={heroImages[1]}/>
                </div>
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLast} cc-pt-9`}>
                    <ProgressiveImage className={`${classes.heroDecorations__image}`} image={heroImages[2]}/>
                </div>
            </div>
        </div>
    );
};