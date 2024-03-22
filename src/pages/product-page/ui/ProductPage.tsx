import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import {PagePath} from "@/features";
import {ProductOverview} from "@/widgets/product/ui/overview/ProductOverview";
import {products} from "@/widgets/product";
import {ErrorPage} from "@/pages/error-page/ui/ErrorPage";

interface ProductPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const ProductPage: FC<ProductPageProps> = ({className, ...props}: ProductPageProps) => {
    const params = useParams();
    const product = products.find(product => product.hrefPostfix === '/' + params.item);

    return product === undefined
        ? <ErrorPage />
        : (
            <div className={`${classes.itemPage__wrapper} ${className}`} {...props}>
                <div className={`${classes.itemPage__content}`}>
                    <div className={`${classes.itemPage__pathWrapper} cc-main-gutter`}>
                        <div className={`${classes.itemPage__path} cc-main-gutter-content`}>
                            <PagePath />
                        </div>
                    </div>
                    <div className={`${classes.itemPage__itemWrapper} cc-main-gutter cc-pt-9 cc-laptop-pt-13`}>
                        <div className={`${classes.itemPage__item} cc-main-gutter-content`}>
                            <ProductOverview data={product} />
                        </div>
                    </div>
                </div>
            </div>
    );
};