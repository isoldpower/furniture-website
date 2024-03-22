import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProcessStep.module.scss';
import {ProcessDisplayData} from "../../model";
import {ProgressiveImage} from "@/shared/ui";

interface ProcessStepProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProcessDisplayData;
}

export const ProcessStep: FC<ProcessStepProps> = ({className, data, ...props}: ProcessStepProps) => {
    return (
        <div className={`${classes.processStep__wrapper} ${className} cc-flex`} {...props}>
            <div className={`${classes.processStep__content} cc-flex cc-flex-col cc-gap-9 cc-p-9`}
                 itemType={data.variant ?? 'default'}>
                <div className={`${classes.processStep__order} cc-clr-accent-500`}>{data.order}</div>
                <p className={`${classes.processStep__paragraph}`}>{data.paragraph}</p>
                <div className={`${classes.processStep__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.processStep__image}`} image={data.image}/>
                </div>
            </div>
        </div>
    );
};