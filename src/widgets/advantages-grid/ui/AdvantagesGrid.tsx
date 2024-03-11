import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AdvantagesGrid.module.scss';
import {Advantage} from "@/entities/advantage/ui/Advantage";
import {advantages} from "@/widgets/advantages-grid/api";

interface AdvantagesGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const AdvantagesGrid: FC<AdvantagesGridProps> = ({className, ...props}: AdvantagesGridProps) => {
    return (
        <div className={`${classes.advantagesGrid__wrapper} ${className}`} {...props}>
            <div className={`${classes.advantagesGrid__content} cc-grid cc-gap-5`}>
                {advantages.map((advantage, key) => (
                    <Advantage className={`${classes.advantagesGrid__item}`} data={advantage} key={key}/>
                ))}
            </div>
        </div>
    );
};