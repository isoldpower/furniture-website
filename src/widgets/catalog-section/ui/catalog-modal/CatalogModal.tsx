import {FC} from "react";
import '@/app/scss/main.scss';
import {CatalogModalSectionsFx, useGetAllSectionsQuery} from "@/features/catalog-section";
import {SectionHeaderCard, CatalogModalSections} from "@/entities/catalog-section";
import {FullscreenModal} from "@/shared/ui-toolkit";

interface CatalogModalProps {
}

export const CatalogModal: FC<CatalogModalProps> = () => {
    const {...query} = useGetAllSectionsQuery();

    return (
        <FullscreenModal>
            <CatalogModalSectionsFx {...query}>
                <CatalogModalSections sections={query?.currentData}>
                    <SectionHeaderCard />
                </CatalogModalSections>
            </CatalogModalSectionsFx>
        </FullscreenModal>
    );
};