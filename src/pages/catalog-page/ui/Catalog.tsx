import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Catalog.module.scss';
import {Link} from "react-router-dom";
import {CallbackSection, PageTitle} from "@/widgets/layout";
import {CatalogSectionCard} from "@/entities/catalog-section";
import {sections} from "@/widgets/catalog-section";
import {getImage} from "@/shared/api";

interface CatalogProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const Catalog: FC<CatalogProps> = ({className, ...props}: CatalogProps) => {
    const sectionElements = sections.map((section, key) => (
        <li key={key}>
            <Link to={`/catalog${section.hrefPostfix}`}>
                <CatalogSectionCard data={{
                    ...section,
                    image: getImage(section.previewImageId)
                }} tabIndex={0}/>
            </Link>
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