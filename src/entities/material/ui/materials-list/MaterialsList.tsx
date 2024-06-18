import {cloneElement, FC, ReactElement, useCallback, useMemo} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsList.module.scss';
import {Material} from "@/entities/material";


interface MaterialsListProps {
    children: ReactElement;
    materials?: Material[];
}

export const MaterialsList: FC<MaterialsListProps> = ({children, materials}: MaterialsListProps) => {
    const getClone = useCallback((material: Material, key: number) => {
        return cloneElement(children, {
            ...children.props,
            data: material,
            key
        });
    }, [children]);

    const getElements = useCallback(() => {
        return materials.map((section, key) => getClone(section, key));
    }, [getClone, materials]);

    const elements = useMemo(() => {
        return getElements();
    }, [getElements]);

    return materials ? (
        <div className={`${classes.materialsList__wrapper} cc-grid cc-gap-16 cc-laptop-gap-18`}>
            {elements}
        </div>
    ) : undefined;
};