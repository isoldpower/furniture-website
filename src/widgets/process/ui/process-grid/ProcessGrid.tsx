import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProcessGrid.module.scss';
import {ProcessStep} from "@/entities/process";
import {imageApiHandler} from "@/shared/api";
import {processApi} from "@/widgets/process/api";

interface ProcessGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const ProcessGrid: FC<ProcessGridProps> = ({className, ...props}: ProcessGridProps) => {
    return (
        <div className={`${classes.processGrid__wrapper} ${className}`} {...props}>
            <div className={`${classes.processGrid__content} cc-grid cc-gap-5`}>
                {processApi.getAll().map((step, key) => (
                    <ProcessStep className={`${classes.processGrid__item} cc-grid`} data={{
                        ...step,
                        image: imageApiHandler.getImage(step.imageId),
                        order: ('0' + (key + 1)).slice(-2),
                        variant: key % 2 == 0 ? 'default' : 'primary'
                    }} key={key} />
                ))}
            </div>
        </div>
    );
};