import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductPreviewMaterialsFx.module.scss';
import {useGetProductMaterialsQuery} from "@/widgets/product";

interface ProductMaterialsPreviewProps {
    productId: number;
}

export const ProductPreviewMaterialsFx: FC<ProductMaterialsPreviewProps> = ({productId}: ProductMaterialsPreviewProps) => {
    const {currentData: materials, isLoading, isError} = useGetProductMaterialsQuery(productId);

    if (isLoading) return <div>Идет загрузка...</div>
    else if (isError) return <div>Ошибка :(</div>

    return <div>
        {materials.length == 0
            ? <span>Материалы не найдены</span>
            : materials.map((material, key) => (
            <span className={`${classes.productCard__material}`} key={key}>
                {material.title}
                {key < materials.length - 1 ? <>,&nbsp;</> : null}
            </span>
        ))}
    </div>
};