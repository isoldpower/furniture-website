import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ListPreviewMaterials.module.scss';
import {Material} from "@/entities/material";

type ListPreviewMaterialsProps = {
    materials: Material[];
}

export const ListPreviewMaterials: FC<ListPreviewMaterialsProps> = ({materials}: ListPreviewMaterialsProps) => {
    return materials.length > 0 ? (
            materials?.map((material, key) => (
                <span className={`${classes.productCard__material}`} key={key}>
                    {material.title}
                    {key < materials?.length - 1 ? <>,&nbsp;</> : undefined}
                 </span>
            ))
    ) : 'Материалы не найдены';
};