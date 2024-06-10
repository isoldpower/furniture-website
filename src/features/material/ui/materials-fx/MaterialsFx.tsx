import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsFx.module.scss';
import {MaterialOverview} from "@/widgets/material";
import {useGetAllMaterialsQuery} from "@/widgets/material";

interface MaterialsLoaderProps {
}

export const MaterialsFx: FC<MaterialsLoaderProps> = () => {
    const {currentData : materials, isLoading, isError} = useGetAllMaterialsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <div className={`${classes.materialsPage__grid} cc-grid cc-gap-16 cc-laptop-gap-18`}>
            {materials.map((material, key) => (
                <MaterialOverview data={material} key={key}/>
            ))}
        </div>
    );
};