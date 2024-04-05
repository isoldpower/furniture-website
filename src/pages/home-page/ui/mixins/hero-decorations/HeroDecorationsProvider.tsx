import classes from './HeroDecorationsProvider.module.scss';
import '@/app/scss/main.scss';
import {BaseHTMLAttributes, FC} from "react";
import {ProgressiveImage} from "@/shared/ui";
import {HERO_IMAGE1, HERO_IMAGE2, HERO_IMAGE3} from "@/app/static";
import {useGetImageQuery} from "@/app/redux";
import {imageDefault} from "@/shared/lib";

interface HeroDecorationsProviderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const HeroDecorationsProvider: FC<HeroDecorationsProviderProps> = ({className, children, ...props}: HeroDecorationsProviderProps) => {
    const {currentData: image1} = useGetImageQuery(HERO_IMAGE1);
    const {currentData: image2} = useGetImageQuery(HERO_IMAGE2);
    const {currentData: image3} = useGetImageQuery(HERO_IMAGE3);

    return (
        <div className={`${classes.heroDecorations__wrapper} ${className}`} {...props}>
            <div className={`${classes.heroDecorations__content}`}>
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageFirst} cc-pb-7`}>
                    <ProgressiveImage className={`${classes.heroDecorations__image}`} image={image1 ?? imageDefault}/>
                </div>
                {children}
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLeft}`}>
                    <ProgressiveImage className={`${classes.heroDecorations__image}`} image={image2 ?? imageDefault}/>
                </div>
                <div className={`${classes.heroDecorations__imageWrapper} ${classes.heroDecorations__imageLast} cc-pt-9`}>
                    <ProgressiveImage className={`${classes.heroDecorations__image}`} image={image3 ?? imageDefault}/>
                </div>
            </div>
        </div>
    );
};