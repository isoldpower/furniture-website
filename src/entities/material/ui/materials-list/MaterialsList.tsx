import {FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsList.module.scss';
import {Material} from "@/entities/material";
import {useClonedElements} from "@/shared/lib";

type MaterialsListProps = {
    children: ReactElement;
    materials?: Material[];
}

export const MaterialsList: FC<MaterialsListProps> = ({children, materials}: MaterialsListProps) => {
    const clonedElements = useClonedElements(children, materials);

    return materials ? (
        <div className={`${classes.materialsList__wrapper} cc-grid cc-gap-16 cc-laptop-gap-18`}>
            {clonedElements}
        </div>
    ) : undefined;
};