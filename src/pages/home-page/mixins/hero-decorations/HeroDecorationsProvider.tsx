import classes from './HeroDecorationsProvider.module.scss';
import '@/app/scss/main.scss';
import {BaseHTMLAttributes, FC} from "react";
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {useGetImageQuery} from "@/app/redux";
import {imageDefault} from "@/shared/lib";
import {useSettings} from "@/app/static";

interface HeroDecorationsProviderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const HeroDecorationsProvider: FC<HeroDecorationsProviderProps> = ({className, children, ...props}: HeroDecorationsProviderProps) => {
    const settings = useSettings();
    const {currentData: image1} = useGetImageQuery(Number(settings.safeData('HERO_IMAGE1')));
    const {currentData: image2} = useGetImageQuery(Number(settings.safeData('HERO_IMAGE2')));
    const {currentData: image3} = useGetImageQuery(Number(settings.safeData('HERO_IMAGE3')));

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