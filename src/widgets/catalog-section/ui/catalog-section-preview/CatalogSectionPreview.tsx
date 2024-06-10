import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSectionPreview.module.scss';
import {AdaptiveLink} from "@/shared/ui-toolkit";
import {CatalogSectionCard} from "@/entities/catalog-section";
import {useGetAllSectionsQuery} from "@/widgets/catalog-section";

interface CatalogSectionPreviewProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogSectionPreview: FC<CatalogSectionPreviewProps> = () => {
    const {currentData : sections, isLoading, isError} = useGetAllSectionsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    const sectionElements = sections.map((section, key) => (
        <li className="cc-grid" key={key}>
            <AdaptiveLink to={`/catalog${section.href_postfix}`}>
                <CatalogSectionCard data={{
                    ...section,
                    hrefPostfix: section.href_postfix,
                    image: section.preview_image
                }}/>
            </AdaptiveLink>
        </li>
    ));

    return (
        <ul className={`${classes.catalog__sectionsGrid} cc-grid cc-gap-5`}>
            {sectionElements}
        </ul>
    );
};