import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './HeroSection.module.scss';
import {Button} from "@/shared/ui";
import {websiteRoutes} from "@/shared/lib";
import parse from 'html-react-parser';
import {useSettings} from "@/app/static/useSettings";

interface HeroSectionProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const HeroSection: FC<HeroSectionProps> = ({className, ...props}: HeroSectionProps) => {
    const settings = useSettings();
    const rawTitle = settings.safeData('HERO_TITLE');

    return (
        <div className={`${classes.heroSection__wrapper} ${className}`} {...props}>
            <div className={`${classes.heroSection__content} cc-gap-13`}>
                <div className={`${classes.heroSection__body} cc-gap-10`}>
                    <h1 className={`${classes.heroSection__heading} cc-heading-1`}>{parse(rawTitle.replace('\n', '<br />'))}</h1>
                    <p className={`${classes.heroSection__paragraph}`}>{settings.safeData('HERO_PARAGRAPH')}</p>
                </div>
                <div className={`${classes.heroSection__buttons}`}>
                    <Button className={`${classes.heroSection__accentButton}`} data={{variant: 'accent'}}
                            semantic="link" to={websiteRoutes.catalog}>Перейти в каталог</Button>
                    <Button className={`${classes.heroSection__aboutButton}`} semantic="link" to={websiteRoutes.about}>Подробнее
                        о компании</Button>
                </div>
            </div>
        </div>
    );
};