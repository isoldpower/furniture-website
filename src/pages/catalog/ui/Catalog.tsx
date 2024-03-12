import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Catalog.module.scss';
import {CallbackSection, PageTitle} from "@/widgets";
import {CatalogSection} from "@/entities/catalog-section/ui/catalog-card/CatalogSection";
import {products} from "@/pages/catalog/api";
import {Link} from "react-router-dom";

interface CatalogProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const Catalog: FC<CatalogProps> = ({className, ...props}: CatalogProps) => {
    return (
        <div className={`${classes.catalog__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalog__content} cc-main-gutter-content`}>
                <PageTitle className={`${classes.catalog__pageTitle} cc-pt-9`} />
                <section className={`${classes.catalog__sections} cc-pt-9 cc-laptop-pt-11`}>
                    <div className={`${classes.catalog__sectionsGrid} cc-grid cc-gap-5`}>
                        {products.map((section, key) => (
                            <Link to={`/catalog${section.hrefPostfix}`} key={key}>
                                <CatalogSection data={section} tabIndex={0}/>
                            </Link>
                        ))}
                    </div>
                </section>
                <CallbackSection className={`${classes.catalog__callbackSection} cc-py-16 cc-laptop-py-18`} />
            </div>
        </div>
    );
};