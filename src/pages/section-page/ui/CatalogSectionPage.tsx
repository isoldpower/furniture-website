import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {useParams} from "react-router-dom";
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {ErrorPage} from "@/pages/error-page/ui/ErrorPage";
import {LoadingPage} from "@/pages/loading-page";
import {useGetAllSectionsQuery} from "@/app/redux";
import {SectionProductsList} from "@/pages/section-page/ui/mixins/section-products-list/SectionProductsList";

interface CatalogSectionPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const CatalogSectionPage: FC<CatalogSectionPageProps> = ({className, ...props}: CatalogSectionPageProps) => {
    const params = useParams();
    const {currentData : sections, isLoading, isError} = useGetAllSectionsQuery();

    if (isLoading) return <LoadingPage />
    else if (isError) return <ErrorPage paragraph="Кажется, у нас что-то сломалось. Перезагрузите страницу или сообщите нам о проблеме, если это не помогает"/>

    const section = sections.find(item => item.href_postfix === '/' + params.section);

    return (
        <div className={`${classes.catalogSection__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalogSection__content} cc-main-gutter-content`}>
                <div className={`${classes.catalogSection__titleWrapper}`}>
                    <div className={`${classes.catalogSection__title} cc-pt-9`}>
                        <PageTitle />
                    </div>
                </div>
                <div className={`${classes.catalogSection__catalogWrapper} cc-pt-9 cc-laptop-pt-13`}>
                    <SectionProductsList sectionId={section.id} />
                </div>
                <section className={`${classes.catalogSection__callback} cc-py-15 cc-laptop-py-17`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
}

export default CatalogSectionPage;