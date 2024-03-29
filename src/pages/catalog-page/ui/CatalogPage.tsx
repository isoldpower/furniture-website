import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {CatalogSectionCard} from "@/entities/catalog-section";
import {AdaptiveLink} from "@/shared/ui";
import {imageApiHandler} from "@/shared/api";
import {sectionApi} from "@/widgets/catalog-section";

interface CatalogProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const CatalogPage: FC<CatalogProps> = ({className, ...props}: CatalogProps) => {
    const sectionElements = sectionApi.getAll().map((section, key) => (
        <li className="cc-grid" key={key}>
            <AdaptiveLink to={`/catalog${section.hrefPostfix}`}>
                <CatalogSectionCard data={{
                    ...section,
                    image: imageApiHandler.getItem(section.previewImageId)
                }}/>
            </AdaptiveLink>
        </li>
    ));

    return (
        <div className={`${classes.catalog__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalog__content} cc-main-gutter-content`}>
                <div className={`${classes.catalog__titleWrapper}`}>
                    <PageTitle className={`${classes.catalog__pageTitle} cc-pt-9`} />
                </div>
                <section className={`${classes.catalog__sections} cc-pt-9 cc-laptop-pt-11r`}>
                    <ul className={`${classes.catalog__sectionsGrid} cc-grid cc-gap-5`}>
                        {sectionElements}
                    </ul>
                </section>
                <CallbackSection className={`${classes.catalog__callbackSection} cc-py-16 cc-laptop-py-18`} />
            </div>
        </div>
    );
};

export default CatalogPage;