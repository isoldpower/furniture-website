import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './Advantage.module.scss';
import {Icon} from "@/shared/icons";
import {HomeAdvantageData} from "@/entities/advantage/model";

interface AdvantageProps {
    data?: HomeAdvantageData;
}

export const HomeAdvantage: FC<AdvantageProps> = ({data}: AdvantageProps) => {
    return data ? (
        <div className={`${classes.advantage__wrapper} cc-flex`}>
            <div className={`${classes.advantage__content} cc-p-7 cc-flex cc-flex-col cc-gap-9`}>
                <div className={`${classes.advantage__head} cc-flex cc-justify-content-space cc-align-items-center cc-clr-accent-500`}>
                    <Icon className={`${classes.advantage__icon}`} height={32} width={32}/>
                    <div className={`${classes.advantage__order}`}>{data.order}</div>
                </div>
                <h3 className={`${classes.advantage__heading} cc-heading-3`}>{data.title}</h3>
                <p className={`${classes.advantage__paragraph}`}>{data.paragraph}</p>
            </div>
        </div>) : undefined;
};