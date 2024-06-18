import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ListPreviewMaterials.module.scss';
import {Material} from "@/entities/material";

interface ListPreviewMaterialsProps extends BaseHTMLAttributes<HTMLDivElement> {
    materials: Material[];
}

export const ListPreviewMaterials: FC<ListPreviewMaterialsProps> = ({materials, ...props}: ListPreviewMaterialsProps) => {
    return materials.length > 0 ? (
        <div {...props}>
            {materials?.map((material, key) => (
                <span className={`${classes.productCard__material}`} key={key}>
                    {material.title}
                    {key < materials?.length - 1 ? <>,&nbsp;</> : undefined}
                 </span>
            ))}
        </div>
    ) : <div {...props}>Материалы не найдены</div>;
};