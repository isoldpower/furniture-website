import {cloneElement, FC, ReactElement, useCallback, useMemo} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogModalSections.module.scss';
import {Section} from "@/entities/catalog-section";
import {breakpoints, useDocumentSize} from "@/shared/lib";

interface CatalogModalSectionsProps {
    sections: Section[];
    children: ReactElement;
}

export const CatalogModalSections: FC<CatalogModalSectionsProps> = ({sections, children}: CatalogModalSectionsProps) => {
    const width = useDocumentSize().x;

    const getClone = useCallback((section: Section, key: number) => {
        return cloneElement(children, {
            ...children.props,
            data: section,
            key
        });
    }, [children]);

    const getElements = useCallback(() => {
        const sectionsAmount = width >= breakpoints.desktop ? 4 : 3;
        const sectionsChunk = sections?.slice(0, sectionsAmount);
        return sectionsChunk?.map((section, key) => getClone(section, key));
    }, [width, getClone, sections]);

    const elements = useMemo(() => {
        return getElements();
    }, [getElements]);

    return elements ? (
            <div className={`${classes.catalogModal__sections} cc-flex cc-gap-5 cc-py-10`}>
                {elements}
            </div>
        ) : undefined;
};