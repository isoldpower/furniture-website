import {cloneElement, FC, ReactElement, useCallback, useMemo} from "react";
import '@/app/scss/main.scss';
import {Section} from "@/entities/catalog-section";
import classes from './SideHeaderSections.module.scss';

interface SideHeaderSectionsProps {
    sections: Section[];
    children: ReactElement;
}

export const SideHeaderSections: FC<SideHeaderSectionsProps> = ({sections, children}: SideHeaderSectionsProps) => {
    const getClone = useCallback((material: Section, key: number) => {
        return cloneElement(children, {
            ...children.props,
            data: material,
            key
        });
    }, [children]);

    const getElements = useCallback(() => {
        return sections.map((section, key) => getClone(section, key)).slice(0, 4);
    }, [getClone, sections]);

    const elements = useMemo(() => {
        return getElements();
    }, [getElements]);

    return sections ? (
        <div className={`${classes.header__catalogPreview} cc-grid cc-gap-7`}>
            {elements}
        </div>
    ) : undefined;
};