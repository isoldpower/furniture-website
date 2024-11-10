import {FC, ReactElement, useMemo} from "react";

import '@/app/scss/main.scss';
import {SectionPreviewListFx} from "@/features/catalog-section";
import {SectionPreviewList} from "@/entities/catalog-section";
import {useGetAllSectionsQuery} from "@/widgets/catalog-section";

interface CatalogFeaturedPreviewProps {
    children?: ReactElement;
}

export const CatalogFeaturedPreview: FC<CatalogFeaturedPreviewProps> = ({children}: CatalogFeaturedPreviewProps) => {
    const {...query} = useGetAllSectionsQuery();
    const importantSections = useMemo(() => query.currentData?.filter(section => section.visible_in_preview), [query.currentData]);

    return (
        <SectionPreviewListFx {...query}>
            <SectionPreviewList sections={importantSections}>
                {children}
            </SectionPreviewList>
        </SectionPreviewListFx>
    );
};