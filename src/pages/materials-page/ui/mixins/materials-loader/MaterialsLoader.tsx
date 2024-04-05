import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsLoader.module.scss';
import {MaterialOverview} from "@/widgets/material/ui/material-overview/MaterialOverview";
import {useGetAllMaterialsQuery} from "@/widgets/material";

interface MaterialsLoaderProps {
}

export const MaterialsLoader: FC<MaterialsLoaderProps> = () => {
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