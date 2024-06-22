import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './AdvantagesGrid.module.scss';
import {HomeAdvantage} from "@/entities/advantage";
import {useGetAdvantagesOfFirmQuery} from "@/widgets/advantage";
import {AdvantagesGridFx} from "@/features/advantage";

export const AdvantagesGrid: FC = () => {
    const {...query} = useGetAdvantagesOfFirmQuery();

    return (
        <AdvantagesGridFx {...query}>
            <div className={`${classes.advantagesGrid__content} cc-grid cc-gap-5`}>
                {query.currentData?.map((advantage, key) => (
                    <div className={`${classes.advantagesGrid__item}`} key={key}>
                        <HomeAdvantage data={advantage} order={key + 1} />
                    </div>
                ))}
            </div>
        </AdvantagesGridFx>
    );
};