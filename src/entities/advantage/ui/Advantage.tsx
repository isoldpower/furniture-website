import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Advantage.module.scss';
import {AdvantageData} from "../model";
import {Icon} from "@/shared/icons";

interface AdvantageProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: AdvantageData;
}

export const Advantage: FC<AdvantageProps> = ({className, data, ...props}: AdvantageProps) => {
    return (
        <div className={`${classes.advantage__wrapper} ${className}`} {...props}>
            <div className={`${classes.advantage__content} cc-p-7 cc-grid cc-gap-9`}>
                <div className={`${classes.advantage__head} cc-flex cc-justify-content-space cc-align-items-center cc-clr-accent-500`}>
                    <Icon className={`${classes.advantage__icon}`} height={32} width={32}/>
                    <div className={`${classes.advantage__order}`}>{('0' + data.index).slice(-2)}</div>
                </div>
                <h3 className={`${classes.advantage__heading} cc-heading-3`}>{data.title}</h3>
                <p className={`${classes.advantage__paragraph}`}>{data.paragraph}</p>
            </div>
        </div>
    );
};