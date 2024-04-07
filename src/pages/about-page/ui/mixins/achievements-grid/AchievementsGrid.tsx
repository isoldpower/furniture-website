import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AchievementsGrid.module.scss';
import {AboutAdvantage} from "@/entities/advantage";
import {useSettings} from "@/app/static/useSettings";

interface AchievementsGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const AchievementsGrid: FC<AchievementsGridProps> = ({className, ...props}: AchievementsGridProps) => {
    const settings = useSettings();

    return (
        <div className={`${classes.aboutPage__body} ${className} cc-flex cc-flex-col cc-gap-9 cc-laptop-gap-13`} {...props}>
            <h1 className={`${classes.aboutPage__overviewHeading}`}>{settings.safeData('ABOUT_TITLE')}</h1>
            <p className={`${classes.aboutPage__overviewParagraph}`}>{settings.safeData('ABOUT_PARAGRAPH')}</p>
            <div className={`${classes.aboutPage__achievements} cc-flex cc-gap-5`}>
                <AboutAdvantage data={{title: settings.safeData('ABOUT_STATISTIC1_TITLE'), number: settings.safeData('ABOUT_STATISTIC1_NUMBER')}}/>
                <AboutAdvantage data={{title: settings.safeData('ABOUT_STATISTIC2_TITLE'), number: settings.safeData('ABOUT_STATISTIC2_NUMBER')}}/>
                <AboutAdvantage data={{title: settings.safeData('ABOUT_STATISTIC3_TITLE'), number: settings.safeData('ABOUT_STATISTIC3_NUMBER')}}/>
            </div>
        </div>
    );
};