import {FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import {MaterialsFx} from "@/features/material";
import {MaterialsList} from "@/entities/material";
import {useGetAllMaterialsQuery} from "@/widgets/material";

interface AvailableMaterialsListProps {
    children: ReactElement;
}

export const AvailableMaterialsList: FC<AvailableMaterialsListProps> = ({children}: AvailableMaterialsListProps) => {
    const {...query} = useGetAllMaterialsQuery();

    return (
        <MaterialsFx {...query}>
            <MaterialsList materials={query?.currentData}>
                {children}
            </MaterialsList>
        </MaterialsFx>
    );
};