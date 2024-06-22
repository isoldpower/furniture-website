import {cloneElement, FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialAdvantages.module.scss';
import {Advantage} from "@/entities/advantage";
import {useClonedElements} from "@/shared/lib";

interface MaterialAdvantagesProps {
    advantages: Advantage[];
    children: ReactElement;
}

export const MaterialAdvantages: FC<MaterialAdvantagesProps> = ({children, advantages}: MaterialAdvantagesProps) => {
    const clonedElements = useClonedElements(children, advantages);

    return advantages ? (
        <div className={`${classes.materialAdvantages__wrapper}`}>
            {clonedElements.map((element, index) => cloneElement(element, {
                ...element.props,
                order: index + 1
            }))}
        </div>
    ) : undefined;
};