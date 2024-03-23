import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogPage.module.scss';
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {CatalogSectionCard} from "@/entities/catalog-section";
import {sections} from "@/widgets/catalog-section";
import {getImage} from "@/shared/api";
import {AdaptiveLink} from "@/shared/ui";

interface CatalogProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const CatalogPage: FC<CatalogProps> = ({className, ...props}: CatalogProps) => {
    const sectionElements = sections.map((section, key) => (
        <li className="cc-grid" key={key}>
            <AdaptiveLink to={`/catalog${section.hrefPostfix}`}>
                <CatalogSectionCard data={{
                    ...section,
                    image: getImage(section.previewImageId)
                }}/>
            </AdaptiveLink>
        </li>
    ));

    return (
        <div className={`${classes.catalog__wrapper} ${className}`} {...props}>
            <div className={`${classes.catalog__content}`}>
                <div className="cc-main-gutter">
                    <div className="cc-main-gutter-content">
                        <PageTitle className={`${classes.catalog__pageTitle} cc-pt-9`} />
                    </div>
                </div>
                <section className={`${classes.catalog__sections} cc-pt-9 cc-laptop-pt-11 cc-main-gutter`}>
                    <ul className={`${classes.catalog__sectionsGrid} cc-grid cc-gap-5 cc-main-gutter-content`}>
                        {sectionElements}
                    </ul>
                </section>
                <CallbackSection className={`${classes.catalog__callbackSection} cc-py-16 cc-laptop-py-18`} />
            </div>
        </div>
    );
};

export default CatalogPage;