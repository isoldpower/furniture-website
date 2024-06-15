import {cloneElement, FC, ReactElement, useCallback, useMemo} from 'react';
import {Section} from "@/entities/catalog-section";

interface SectionPreviewListProps {
    sections?: Section[];
    children: ReactElement;
}

export const SectionPreviewList: FC<SectionPreviewListProps> = ({sections, children}: SectionPreviewListProps) => {
    const getClone = useCallback((section: Section, key: number) => {
        return cloneElement(children, {
            ...children.props,
            data: section,
            key
        });
    }, [children]);

    const getElements = useCallback(() => {
        return sections.map((section, key) => getClone(section, key)).slice(0, 3);
    }, [getClone, sections]);

    const elements = useMemo(() => {
        return getElements();
    }, [getElements]);

    return sections ? (
        <div className='cc-flex cc-flex-col cc-gap-13 cc-laptop-gap-17'>
            {elements}
        </div>
    ) : undefined;
};