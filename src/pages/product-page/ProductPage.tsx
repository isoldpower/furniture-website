import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductPage.module.scss';
import {ProductOverview} from "@/widgets/product";
import {PagePath} from "@/features/navigation";
import {CallbackSection} from "@/widgets/feedback";
import {ProductPageFx} from "@/features/product";
import {SimilarProducts} from "@/widgets/product";
import {useParamsParsed} from "@/app/providers";

const ProductPage: FC = () => {
    const {...queryParams} = useParamsParsed();

    return (
        <div className={`${classes.productPage__content}`}>
            <div className={`${classes.productPage__pathWrapper} cc-main-gutter`}>
                <PagePath className={`${classes.productPage__path}`}/>
            </div>
            <ProductPageFx {...queryParams}>
                <section className={`${classes.productPage__productWrapper} cc-pt-9 cc-laptop-pt-13 cc-main-gutter`}>
                    <div className={`${classes.productPage__product}`} >
                        <ProductOverview data={queryParams.product} />
                    </div>
                </section>
                <section className={`${classes.productPage__sectionWrapper} cc-pt-15 cc-laptop-pt-17`}>
                    <SimilarProducts current={queryParams.product} section={queryParams.section} />
                </section>
            </ProductPageFx>
            <section className={`${classes.productPage__callbackWrapper} cc-main-gutter cc-py-15 cc-laptop-py-17`}>
                <CallbackSection />
            </section>
        </div>
    );
};

export default ProductPage;