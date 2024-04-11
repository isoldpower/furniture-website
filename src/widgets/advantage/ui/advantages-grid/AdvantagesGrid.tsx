import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './AdvantagesGrid.module.scss';
import {HomeAdvantage} from "@/entities/advantage";
import {useGetAdvantagesOfFirmQuery} from "@/widgets/advantage";

interface AdvantagesGridProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const AdvantagesGrid: FC<AdvantagesGridProps> = ({className, ...props}: AdvantagesGridProps) => {
    const {currentData : advantages, isLoading, isError} = useGetAdvantagesOfFirmQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <div className={`${classes.advantagesGrid__wrapper} ${className}`} {...props}>
            <div className={`${classes.advantagesGrid__content} cc-grid cc-gap-5`}>
                {advantages.map((advantage, key) => (
                    <HomeAdvantage className={`${classes.advantagesGrid__item}`} data={{
                        ...advantage,
                        order: ('0' + (key + 1)).slice(-2)
                    }} key={key}/>
                ))}
            </div>
        </div>
    );
};