import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AchievementsGrid.module.scss';
import {
    ABOUT_PARAGRAPH,
    ABOUT_STATISTIC1_NUMBER,
    ABOUT_STATISTIC1_TITLE, ABOUT_STATISTIC2_NUMBER,
    ABOUT_STATISTIC2_TITLE, ABOUT_STATISTIC3_NUMBER, ABOUT_STATISTIC3_TITLE,
    ABOUT_TITLE
} from "@/app/static";
import {AboutAdvantage} from "@/entities/advantage";

interface AchievementsGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const AchievementsGrid: FC<AchievementsGridProps> = ({className, ...props}: AchievementsGridProps) => {
    return (
        <div className={`${classes.aboutPage__body} ${className} cc-flex cc-flex-col cc-gap-9 cc-laptop-gap-13`} {...props}>
            <h1 className={`${classes.aboutPage__overviewHeading}`}>{ABOUT_TITLE}</h1>
            <p className={`${classes.aboutPage__overviewParagraph}`}>{ABOUT_PARAGRAPH}</p>
            <div className={`${classes.aboutPage__achievements} cc-flex cc-gap-5`}>
                <AboutAdvantage data={{title: ABOUT_STATISTIC1_TITLE, number: ABOUT_STATISTIC1_NUMBER}}/>
                <AboutAdvantage data={{title: ABOUT_STATISTIC2_TITLE, number: ABOUT_STATISTIC2_NUMBER}}/>
                <AboutAdvantage data={{title: ABOUT_STATISTIC3_TITLE, number: ABOUT_STATISTIC3_NUMBER}}/>
            </div>
        </div>
    );
};