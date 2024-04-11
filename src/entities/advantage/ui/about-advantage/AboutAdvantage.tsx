import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AboutAdvantage.module.scss';

interface AboutAdvantageData {
    title: string;
    number: string;
}

interface AboutAdvantageProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: AboutAdvantageData;
}

export const AboutAdvantage: FC<AboutAdvantageProps> = ({className, data, ...props}: AboutAdvantageProps) => {
    return (
        <div className={`${classes.aboutPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.aboutPage__content} cc-grid cc-gap-7`}>
                <h4 className={`${classes.aboutPage__advantageDescriptor}`}>{data.title}</h4>
                <div className={`${classes.aboutPage__advantageNumber} cc-clr-accent-500`}>{data.number}</div>
            </div>
        </div>
    );
};