import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogModalSections.module.scss';
import {SectionHeaderCard} from "@/entities/catalog-section/ui/section-header-card/SectionHeaderCard";
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {useGetAllSectionsQuery} from "@/app/redux";

interface CatalogModalSectionsProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogModalSections: FC<CatalogModalSectionsProps> = () => {
    const width = useDocumentSize().x;
    const sectionsAmount = width >= breakpoints.desktop ? 4 : 3;
    const {currentData: sections, isLoading, isError} = useGetAllSectionsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    const sectionsChunk = sections.slice(0, sectionsAmount);

    return (
        <div className={`${classes.catalogModal__catalog} cc-grid cc-gap-5 cc-py-10`}>
            {sectionsChunk.map((section, key) => (
                <SectionHeaderCard data={section} key={key} />
            ))}
        </div>
    )
};