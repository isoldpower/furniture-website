import {FC, ReactElement, useMemo} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogModalSections.module.scss';
import {Section} from "@/entities/catalog-section";
import {breakpoints, useClonedElements, useDocumentSize} from "@/shared/lib";

type CatalogModalSectionsProps = {
    sections?: Section[];
    children: ReactElement;
}

export const CatalogModalSections: FC<CatalogModalSectionsProps> = ({sections, children}: CatalogModalSectionsProps) => {
    const width = useDocumentSize().x;
    const clonedElements = useClonedElements(children, sections);

    const elements = useMemo(() => {
        const sectionsAmount = width >= breakpoints.desktop ? 4 : 3;
        return clonedElements?.slice(0, sectionsAmount);
    }, [width, clonedElements]);

    return sections ? (
        <div className={`${classes.catalogModal__sections} cc-flex cc-gap-5 cc-py-10`}>
            {elements}
        </div>
    ) : undefined;
};