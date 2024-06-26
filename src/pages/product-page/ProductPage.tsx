import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import {useGetAllProductsQuery, ProductOverview} from "@/widgets/product";
import {PagePath} from "@/features/navigation";
import {CallbackSection} from "@/widgets/feedback";
import {ProductPageFx} from "@/features/product";
import {SimilarProducts} from "@/widgets/product";

const ProductPage: FC = () => {
    const params = useParams();
    const {...productQuery} = useGetAllProductsQuery();
    const product = productQuery.currentData?.find(product => {
        const postfix = product.href_postfix.replace('/', '');
        return postfix === params.item;
    });

    return (
        <div className={`${classes.productPage__content}`}>
            <div className={`${classes.productPage__pathWrapper} cc-main-gutter`}>
                <PagePath className={`${classes.productPage__path}`}/>
            </div>
            <ProductPageFx {...productQuery}>
                <section className={`${classes.productPage__productWrapper} cc-pt-9 cc-laptop-pt-13 cc-main-gutter`}>
                    <div className={`${classes.productPage__product}`} >
                        <ProductOverview data={product} />
                    </div>
                </section>
                <section className={`${classes.productPage__sectionWrapper} cc-pt-15 cc-laptop-pt-17`}>
                    <SimilarProducts current={product} products={productQuery.currentData} />
                </section>
            </ProductPageFx>
            <section className={`${classes.productPage__callbackWrapper} cc-main-gutter cc-py-15 cc-laptop-py-17`}>
                <CallbackSection />
            </section>
        </div>
    );
};

export default ProductPage;