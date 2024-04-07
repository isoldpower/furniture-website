import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import {PagePath} from "@/features";
import {ProductOverview} from "@/widgets/product/ui/overview/ProductOverview";
import {SectionDisplay} from "@/widgets/catalog-section";
import {websiteRoutes} from "@/shared/lib";
import {CallbackSection} from "@/widgets/layout";
import {LoadingPage} from "@/pages/loading-page";
import {ErrorPage} from "@/pages/error-page";
import {useGetAllProductsQuery} from "@/widgets/product";

interface ProductPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

const ProductPage: FC<ProductPageProps> = ({className, ...props}: ProductPageProps) => {
    const params = useParams();
    const {currentData : products, isLoading, isError} = useGetAllProductsQuery();

    if (isLoading) return <LoadingPage />
    else if (isError) return <ErrorPage />

    const product = products.find(product => product.href_postfix === '/' + params.item);
    const relatedProducts = products.filter(iterationProduct =>
        iterationProduct.section.id == product.section.id && iterationProduct.id !== product.id)

    return (
        <div className={`${classes.productPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.productPage__content}`}>
                <div className={`${classes.productPage__pathWrapper} cc-main-gutter`}>
                    <PagePath className={`${classes.productPage__path} cc-main-gutter-content`}/>
                </div>
                <section className={`${classes.productPage__productWrapper} cc-pt-9 cc-laptop-pt-13 cc-main-gutter`}>
                    <ProductOverview className={`${classes.productPage__product} cc-main-gutter-content`} data={product} />
                </section>
                <section className={`${classes.productPage__sectionWrapper} cc-pt-15 cc-laptop-pt-17`}>
                    <div className={`${classes.productPage__sectionPreview}`}>
                        <SectionDisplay data={{
                            carouselProducts: relatedProducts,
                            spoilerProducts: relatedProducts,
                            title: 'Похожее',
                            sectionLink: false,
                            href: websiteRoutes.catalog + product.section.href_postfix
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