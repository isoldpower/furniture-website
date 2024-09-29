import {FC} from "react";
import '@/app/scss/main.scss';
import {CatalogModalSectionsFx} from "@/features/catalog-section";
import {SectionHeaderCard, CatalogModalSections} from "@/entities/catalog-section";
import {FullscreenModal} from "@/shared/ui-toolkit";
import classes from './CatalogModal.module.scss';
import {useGetAllSectionsQuery} from "@/widgets/catalog-section";

interface CatalogModalProps {
}

export const CatalogModal: FC<CatalogModalProps> = () => {
    const {...query} = useGetAllSectionsQuery();

    return (
        <FullscreenModal>
            <CatalogModalSectionsFx {...query}>
                <div className={`${classes.catalogModal__catalog}`}>
                    <CatalogModalSections sections={query?.currentData}>
                        <SectionHeaderCard />
                    </CatalogModalSections>
                </div>
            </CatalogModalSectionsFx>
        </FullscreenModal>
    );
};