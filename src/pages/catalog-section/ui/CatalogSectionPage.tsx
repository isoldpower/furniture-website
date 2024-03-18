import {BaseHTMLAttributes, FC, Fragment} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {useParams} from "react-router-dom";
import {CallbackSection, DetailedProductCard, PageTitle} from "@/widgets";
import {products} from "@/shared/api";
import {SectionData} from "@/entities";
import {CustomProject} from "@/pages/catalog-section/ui/mixins/custom-project/CustomProject";

interface CatalogSectionPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogSectionPage: FC<CatalogSectionPageProps> = ({className, ...props}: CatalogSectionPageProps) => {
    const params = useParams();
    const section: SectionData = products.find(section => section.hrefPostfix === '/' + params.section);

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
                        {section.products.map((product, key) => (
                            <Fragment key={key}>
                                {key === 2 ? <CustomProject data={{
                                    title: 'Не нашли то что искали?',
                                    paragraph: 'Свяжитесь с нами — мы найдем решение',
                                    address: '+7 (999) 123-34-54'}} /> : null
                                }
                                <DetailedProductCard data={product} sectionPostfix={section.hrefPostfix} />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <CallbackSection className="cc-py-15 cc-laptop-py-17"/>
            </div>
        </div>
    );
}