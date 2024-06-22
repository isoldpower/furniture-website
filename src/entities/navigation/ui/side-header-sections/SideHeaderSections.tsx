import {FC, ReactElement, useMemo} from "react";
import '@/app/scss/main.scss';
import {Section} from "@/entities/catalog-section";
import classes from './SideHeaderSections.module.scss';
import {useClonedElements} from "@/shared/lib";

interface SideHeaderSectionsProps {
    sections: Section[];
    children: ReactElement;
}

export const SideHeaderSections: FC<SideHeaderSectionsProps> = ({sections, children}: SideHeaderSectionsProps) => {
    const clonedElements = useClonedElements(children, sections);

    const elements = useMemo(() => {
        return clonedElements.slice(0, 4);
    }, [clonedElements]);

    return sections ? (
        <div className={`${classes.header__catalogPreview} cc-grid cc-gap-7`}>
            {elements}
        </div>
    ) : undefined;
};