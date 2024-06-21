import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProcessStep.module.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {Process} from "@/entities/process";

type ProcessVariant = 'default' | 'primary';

type ProcessStepProps = {
    data: Process;
    order: string;
    variant?: ProcessVariant;
}

export const ProcessStep: FC<ProcessStepProps> = ({data, order, variant = 'default'}: ProcessStepProps) => {
    return data ? (
        <div className={`${classes.processStep__content} cc-flex cc-flex-col cc-gap-9 cc-p-9`} itemType={variant}>
            <div className={`${classes.processStep__order} cc-clr-accent-500`}>{order}</div>
            <p className={`${classes.processStep__paragraph}`}>{data.paragraph}</p>
            <div className={`${classes.processStep__imageWrapper}`}>
                <ProgressiveImage className={`${classes.processStep__image}`} image={data.image}/>
            </div>
        </div>
    ) : undefined;
};