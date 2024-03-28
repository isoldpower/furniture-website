import {BaseHTMLAttributes, FC, Fragment, useEffect, useState} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {useParams} from "react-router-dom";
import {CustomProject} from "@/pages/section-page/ui/mixins/custom-project/CustomProject";
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {DetailedProductCard, productsApi} from "@/widgets/product";
import {Section} from "@/entities/catalog-section";
import {ErrorPage} from "@/pages/error-page/ui/ErrorPage";
import {sectionApi} from "@/widgets/catalog-section";

interface CatalogSectionPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const CatalogSectionPage: FC<CatalogSectionPageProps> = ({className, ...props}: CatalogSectionPageProps) => {
    const params = useParams();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(false);
        setTimeout(() => {
            setLoaded(true);
        }, 0);
    }, [params]);

    const section: Section = sectionApi.getByPostfix('/' + params.section);

    if (section === undefined) return <ErrorPage />;
    if (loaded === false) return undefined;
    return (
        <div className={`${classes.catalogSection__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalogSection__content} cc-main-gutter-content`}>
                <div className={`${classes.catalogSection__titleWrapper}`}>
                    <div className={`${classes.catalogSection__title}`}>
                        <PageTitle />
                    </div>
                </div>
                <div className={`${classes.catalogSection__catalogWrapper} cc-pt-9 cc-laptop-pt-13`}>
                    <div className={`${classes.catalogSection__catalog} cc-grid cc-cgap-5 cc-rgap-9`}>
                        {productsApi.getSectionProducts(section.id).map((product, key) => (
                            <Fragment key={key}>
                                {key === 2 ? <CustomProject data={{
                                    title: 'Не нашли то что искали?',
                                    paragraph: 'Свяжитесь с нами — мы найдем решение',
                                    address: '+7 (999) 123-34-54'}} /> : null
                                }
                                <DetailedProductCard data={product} />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <section className={`${classes.catalogSection__callback} cc-py-15 cc-laptop-py-17`}>
                    <CallbackSection />
                </section>
            </div>
        </div>
    );
}

export default CatalogSectionPage;