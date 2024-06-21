import {cloneElement, FC, ReactElement, useCallback, useMemo} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialAdvantages.module.scss';
import {Advantage} from "@/entities/advantage";

interface MaterialAdvantagesProps {
    advantages: Advantage[];
    children: ReactElement;
}

export const MaterialAdvantages: FC<MaterialAdvantagesProps> = ({children, advantages}: MaterialAdvantagesProps) => {
    const getClone = useCallback((material: Advantage, key: number) => {
        return cloneElement(children, {
            ...children.props,
            data: material,
            key
        });
    }, [children]);

    const getElements = useCallback(() => {
        return advantages.map((section, key) => getClone(section, key));
    }, [getClone, advantages]);

    const elements = useMemo(() => {
        return getElements();
    }, [getElements]);

    return advantages ? (
        <div className={`${classes.materialAdvantages__wrapper}`}>
            {elements}
        </div>
    ) : undefined;
};