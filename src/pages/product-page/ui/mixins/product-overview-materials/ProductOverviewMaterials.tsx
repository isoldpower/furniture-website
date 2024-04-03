import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductOverviewMaterials.module.scss';
import {MaterialPreview} from "@/entities/material";
import {useGetProductMaterialsQuery} from "@/app/redux";


interface ProductOverviewMaterialsProps {
    productId: number;
}

export const ProductOverviewMaterials: FC<ProductOverviewMaterialsProps> = ({productId}: ProductOverviewMaterialsProps) => {
    const {currentData : materials, isLoading, isError} = useGetProductMaterialsQuery(productId);

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <div className={`${classes.itemOverview__materialsWrapper} cc-flex cc-gap-5`}>
            {materials.map((material, key) => (
                <MaterialPreview className={`${classes.itemOverview__material}`} data={material} key={key}/>
            ))}
        </div>
    );
};