import {FC, useMemo} from "react";
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
    const importantSections = useMemo(() => query.currentData?.filter(section => section.visible_in_header), [query.currentData]);

    return (
        <FullscreenModal>
            <CatalogModalSectionsFx {...query}>
                <div className={`${classes.catalogModal__catalog}`}>
                    <CatalogModalSections sections={importantSections}>
                        <SectionHeaderCard />
                    </CatalogModalSections>
                </div>
            </CatalogModalSectionsFx>
        </FullscreenModal>
    );
};