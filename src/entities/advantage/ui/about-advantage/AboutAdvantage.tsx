import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './AboutAdvantage.module.scss';

type AboutAdvantageData = {
    title: string;
    number: string;
}

type AboutAdvantageProps = {
    data?: AboutAdvantageData;
}

export const AboutAdvantage: FC<AboutAdvantageProps> = ({data}: AboutAdvantageProps) => {
    return data ? (
        <div className={`${classes.aboutPage__wrapper}`}>
            <div className={`${classes.aboutPage__content} cc-grid cc-gap-7`}>
                <h4 className={`${classes.aboutPage__advantageDescriptor}`}>{data?.title}</h4>
                <div className={`${classes.aboutPage__advantageNumber} cc-clr-accent-500`}>{data?.number}</div>
            </div>
        </div>
    ) : undefined;
};