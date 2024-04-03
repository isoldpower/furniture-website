import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductMaterialsPreview.module.scss';
import {useGetProductMaterialsQuery} from "@/app/redux";

interface ProductMaterialsPreviewProps {
    id: number;
}

export const ProductMaterialsPreview: FC<ProductMaterialsPreviewProps> = ({id}: ProductMaterialsPreviewProps) => {
    const {currentData: materials, isLoading, isError} = useGetProductMaterialsQuery(id);

    if (isLoading) return <div>Идет загрузка...</div>
    else if (isError) return <div>Ошибка :(</div>

    return <>
        {materials.map((material, key) => (
            <span className={`${classes.productCard__material}`} key={key}>
                {material.title}
                {key < materials.length - 1 ? <>,&nbsp;</> : null}
            </span>
        ))}
    </>
};