import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import {useGetAllSectionsQuery} from "@/app/redux";
import {LoadingPage} from "@/pages/loading-page";
import {ErrorPage} from "@/pages/error-page";
import {CatalogSectionLoader} from "@/pages/home-page/ui/mixins/catalog-section-loader/CatalogSectionLoader";

interface CatalogLoaderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogLoader: FC<CatalogLoaderProps> = () => {
    const {currentData: sections, isLoading, isError } = useGetAllSectionsQuery();

    if (isLoading) return <LoadingPage />
    else if (isError) return <ErrorPage paragraph="Не удалось загрузить каталог. Сообщите нам об ошибке" />

    const sectionsChunk = sections.slice(0, 3);

    return <>
        {sectionsChunk.map((section, key) => (
            <CatalogSectionLoader key={key} section={section} />
        ))}
    </>
};