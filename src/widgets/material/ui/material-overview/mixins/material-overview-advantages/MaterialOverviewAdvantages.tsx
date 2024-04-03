import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialOverviewAdvantages.module.scss';
import {useGetMaterialAdvantagesQuery} from "@/app/redux";
import {HomeAdvantage} from "@/entities/advantage";

interface MaterialOverviewAdvantagesProps {
    materialId: number;
}

export const MaterialOverviewAdvantages: FC<MaterialOverviewAdvantagesProps> = ({materialId}: MaterialOverviewAdvantagesProps) => {
    const {currentData : advantages, isLoading, isError} = useGetMaterialAdvantagesQuery(materialId);

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <div className={`${classes.materialOverview__advantagesWrapper} gap-column-spacing`}>
            {advantages.map((advantage, key) => (
                <HomeAdvantage className={`${classes.materialOverview__advantage} cc-flex`} data={{
                    ...advantage,
                    order: ('0' + (key + 1)).slice(-2)
                }} key={key}/>
            ))}
        </div>
    );
};