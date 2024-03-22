import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProcessGrid.module.scss';
import {steps} from "@/widgets/process/api";
import {ProcessStep} from "@/entities/process";
import {getImage} from "@/shared/api";

interface ProcessGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const ProcessGrid: FC<ProcessGridProps> = ({className, ...props}: ProcessGridProps) => {
    return (
        <div className={`${classes.processGrid__wrapper} ${className}`} {...props}>
            <div className={`${classes.processGrid__content} cc-grid cc-gap-5`}>
                {steps.map((step, key) => (
                    <ProcessStep className={`${classes.processGrid__item} cc-grid`} data={{
                        ...step,
                        image: getImage(step.imageId),
                        order: ('0' + (key + 1)).slice(-2),
                        variant: key % 2 == 0 ? 'default' : 'primary'
                    }} key={key} />
                ))}
            </div>
        </div>
    );
};