import {FC, ReactElement, useMemo} from 'react';
import {Section} from "@/entities/catalog-section";
import {useClonedElements} from "@/shared/lib";

type SectionPreviewListProps = {
    sections?: Section[];
    children: ReactElement;
}

export const SectionPreviewList: FC<SectionPreviewListProps> = ({sections, children}: SectionPreviewListProps) => {
   const clonedElements = useClonedElements(children, sections);

    const elements = useMemo(() => {
        return clonedElements.slice(0, 3);
    }, [clonedElements]);

    return sections ? (
        <div className='cc-flex cc-flex-col cc-gap-13 cc-laptop-gap-17'>
            {elements}
        </div>
    ) : undefined;
};