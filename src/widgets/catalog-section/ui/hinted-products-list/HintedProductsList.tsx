import {FC} from 'react';
import {DetailedProductCard, useGetAllProductsQuery} from "@/widgets/product";
import {InsertCatalogHints, ProductsListFx} from "@/features/catalog-section";
import {useParams} from "react-router-dom";
import {CustomProject} from "@/entities/product";
import classes from './HintedProductsList.module.scss';

interface HintedProductsListProps {
}

export const HintedProductsList: FC<HintedProductsListProps> = () => {
    const params = useParams();
    const {...query} = useGetAllProductsQuery();
    const products = query.currentData?.filter(product => {
        const section = product.section;
        const excludedLeadingSlash = section.href_postfix.replace('/', '');
        return excludedLeadingSlash === params.section;
    });

    return (
        <ProductsListFx {...query}>
            <div className={`${classes.productsList__wrapper} cc-grid cc-cgap-5 cc-rgap-9`}>
                <InsertCatalogHints hint={<CustomProject data={{
                        paragraph: "Свяжитесь с нами — мы найдем решение",
                        title: "Не нашли то что искали?"
                    }}/>}>
                    {products?.map((product, key) => (
                        <DetailedProductCard data={product} key={key} />
                    ))}
                </InsertCatalogHints>
            </div>
        </ProductsListFx>
    );
};