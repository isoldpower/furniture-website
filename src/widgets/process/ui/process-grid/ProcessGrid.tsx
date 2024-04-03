import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProcessGrid.module.scss';
import {ProcessStep} from "@/entities/process";
import {useGetProcessQuery} from "@/app/redux";

interface ProcessGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const ProcessGrid: FC<ProcessGridProps> = ({className, ...props}: ProcessGridProps) => {
    const {currentData : steps, isLoading, isError} = useGetProcessQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <div className={`${classes.processGrid__wrapper} ${className}`} {...props}>
            <div className={`${classes.processGrid__content} cc-grid cc-gap-5`}>
                {steps.map((step, key) => (
                    <ProcessStep className={`${classes.processGrid__item} cc-grid`} data={{
                        ...step,
                        order: ('0' + (key + 1)).slice(-2),
                        variant: key % 2 == 0 ? 'default' : 'primary'
                    }} key={key} />
                ))}
            </div>
        </div>
    );
};