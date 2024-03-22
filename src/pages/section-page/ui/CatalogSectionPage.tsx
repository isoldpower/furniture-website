import {BaseHTMLAttributes, FC, Fragment} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {useParams} from "react-router-dom";
import {CustomProject} from "@/pages/section-page/ui/mixins/custom-project/CustomProject";
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {DetailedProductCard, products} from "@/widgets/product";
import {Section} from "@/entities/catalog-section";
import {sections} from "@/widgets/catalog-section";

interface CatalogSectionPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogSectionPage: FC<CatalogSectionPageProps> = ({className, ...props}: CatalogSectionPageProps) => {
    const params = useParams();
    const section: Section = sections.find(section => section.hrefPostfix === '/' + params.section);

    return (
        <div className={`${classes.catalogSection__wrapper} ${className}`} {...props}>
            <div className={`${classes.catalogSection__content}`}>
                <div className={`${classes.catalogSection__titleWrapper} cc-main-gutter`}>
                    <div className={`${classes.catalogSection__title} cc-main-gutter-content`}>
                        <PageTitle />
                    </div>
                </div>
                <div className={`${classes.catalogSection__catalogWrapper} cc-main-gutter cc-pt-9 cc-laptop-pt-13`}>
                    <div className={`${classes.catalogSection__catalog} cc-main-gutter-content cc-grid cc-cgap-5 cc-rgap-9`}>
                        {products.filter(product => product.sectionId === section.id).map((product, key) => (
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
                <CallbackSection className="cc-py-15 cc-laptop-py-17"/>
            </div>
        </div>
    );
}