import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import {PagePath} from "@/features";
import {ProductOverview} from "@/widgets/product/ui/overview/ProductOverview";
import {products} from "@/widgets/product";
import {ErrorPage} from "@/pages/error-page/ui/ErrorPage";
import {CatalogDisplay, sections} from "@/widgets/catalog-section";
import {websiteRoutes} from "@/shared/lib";
import {CallbackSection} from "@/widgets/layout";

interface ProductPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const ProductPage: FC<ProductPageProps> = ({className, ...props}: ProductPageProps) => {
    const params = useParams();
    const product = products.find(product => product.hrefPostfix === '/' + params.item);
    const section = sections.find(section => section.hrefPostfix === '/' + params.section);

    return product === undefined
        ? <ErrorPage />
        : (
            <div className={`${classes.productPage__wrapper} ${className}`} {...props}>
                <div className={`${classes.productPage__content}`}>
                    <nav className={`${classes.productPage__pathWrapper} cc-main-gutter`}>
                        <div className={`${classes.productPage__path} cc-main-gutter-content`}>
                            <PagePath />
                        </div>
                    </nav>
                    <section className={`${classes.productPage__productWrapper} cc-main-gutter cc-pt-9 cc-laptop-pt-13`}>
                        <div className={`${classes.productPage__product} cc-main-gutter-content`}>
                            <ProductOverview data={product} />
                        </div>
                    </section>
                    <section className={`${classes.productPage__sectionWrapper} cc-pt-15 cc-laptop-pt-17`}>
                        <div className={`${classes.productPage__sectionPreview}`}>
                            <CatalogDisplay data={{
                                title: 'Похожее',
                                sectionLink: false,
                                href: websiteRoutes.catalog + section.hrefPostfix,
                                products: products.filter(iterator =>
                                    iterator.sectionId === product.sectionId && iterator.id !== product.id)
                            }} id="familiar" />
                        </div>
                    </section>
                    <section className={`${classes.productPage__callbackWrapper} cc-py-15 cc-laptop-py-17`}>
                        <CallbackSection />
                    </section>
                </div>
            </div>
    );
};