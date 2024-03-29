import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import {PagePath} from "@/features";
import {ProductOverview} from "@/widgets/product/ui/overview/ProductOverview";
import {productsApi} from "@/widgets/product";
import {ErrorPage} from "@/pages/error-page/ui/ErrorPage";
import {sectionApi, SectionDisplay} from "@/widgets/catalog-section";
import {websiteRoutes} from "@/shared/lib";
import {CallbackSection} from "@/widgets/layout";

interface ProductPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const ProductPage: FC<ProductPageProps> = ({className, ...props}: ProductPageProps) => {
    const params = useParams();
    const product = productsApi.getByPostfix('/' + params.item);
    const section = sectionApi.getByPostfix('/' + params.section);

    return product === undefined
        ? <ErrorPage />
        : (
            <div className={`${classes.productPage__wrapper} ${className}`} {...props}>
                <div className={`${classes.productPage__content}`}>
                    <div className={`${classes.productPage__pathWrapper} cc-main-gutter`}>
                        <PagePath className={`${classes.productPage__path} cc-main-gutter-content`}/>
                    </div>
                    <section className={`${classes.productPage__productWrapper} cc-main-gutter cc-pt-9 cc-laptop-pt-13`}>
                        <ProductOverview className={`${classes.productPage__product} cc-main-gutter-content`} data={product} />
                    </section>
                    <section className={`${classes.productPage__sectionWrapper} cc-pt-15 cc-laptop-pt-17`}>
                        <div className={`${classes.productPage__sectionPreview}`}>
                            <SectionDisplay data={{
                                title: 'Похожее',
                                sectionLink: false,
                                href: websiteRoutes.catalog + section.hrefPostfix,
                                products: productsApi.getSectionProducts(section.id, [product.id])
                            }} id="familiar" />
                        </div>
                    </section>
                    <section className={`${classes.productPage__callbackWrapper} cc-main-gutter cc-py-15 cc-laptop-py-17`}>
                        <CallbackSection className={`${classes.productPage__callbackWrapper} cc-main-gutter-content`}/>
                    </section>
                </div>
            </div>
    );
};

export default ProductPage;