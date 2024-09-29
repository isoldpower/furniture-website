import {FC, useMemo} from 'react';
import {DetailedProductCard} from "@/widgets/product";
import {InsertCatalogHints, ProductsListFx} from "@/features/catalog-section";
import {CustomProject} from "@/entities/product";
import classes from './HintedProductsList.module.scss';
import {useParamsParsed} from "@/app/providers";

interface HintedProductsListProps {
}

export const HintedProductsList: FC<HintedProductsListProps> = () => {
    const {...query} = useParamsParsed();
    const products = useMemo(() => query.section.products, [query.section]);

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