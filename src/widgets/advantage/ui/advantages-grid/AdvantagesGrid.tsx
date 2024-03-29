import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AdvantagesGrid.module.scss';
import {firmAdvantagesApiHandler} from "@/widgets/advantage/api";
import {HomeAdvantage} from "@/entities/advantage";

interface AdvantagesGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const AdvantagesGrid: FC<AdvantagesGridProps> = ({className, ...props}: AdvantagesGridProps) => {
    return (
        <div className={`${classes.advantagesGrid__wrapper} ${className}`} {...props}>
            <div className={`${classes.advantagesGrid__content} cc-grid cc-gap-5`}>
                {firmAdvantagesApiHandler.getAll().map((advantage, key) => (
                    <HomeAdvantage className={`${classes.advantagesGrid__item}`} data={{
                        ...advantage,
                        order: ('0' + (key + 1)).slice(-2)
                    }} key={key}/>
                ))}
            </div>
        </div>
    );
};