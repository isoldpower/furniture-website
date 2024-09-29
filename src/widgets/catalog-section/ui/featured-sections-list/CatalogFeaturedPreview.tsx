import {FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import {SectionPreviewListFx} from "@/features/catalog-section";
import {SectionPreviewList} from "@/entities/catalog-section";
import {useGetAllSectionsQuery} from "@/widgets/catalog-section";

interface CatalogFeaturedPreviewProps {
    children?: ReactElement;
}

export const CatalogFeaturedPreview: FC<CatalogFeaturedPreviewProps> = ({children}: CatalogFeaturedPreviewProps) => {
    const {...query} = useGetAllSectionsQuery();

    return (
        <SectionPreviewListFx {...query}>
            <SectionPreviewList sections={query.currentData}>
                {children}
            </SectionPreviewList>
        </SectionPreviewListFx>
    );
};