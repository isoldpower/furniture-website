import {FC, Fragment} from "react";
import '@/app/scss/main.scss';
import classes from './ProductsListFx.module.scss';
import {DetailedProductCard, useGetAllProductsQuery} from "@/widgets/product";
import {useSettings} from "@/app/static";
import {CustomProject} from "@/entities/product";

interface SectionProductsListProps {
    sectionId: number;
}

export const ProductsListFx: FC<SectionProductsListProps> = ({sectionId}: SectionProductsListProps) => {
    const settings = useSettings();
    const {currentData : products, isLoading, isError} = useGetAllProductsQuery();
    const firstIndex = Number(settings.safeData('FIRST_MORE_INDEX'));
    const frequency = Number(settings.safeData('MORE_FREQUENCY'));

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    const filteredProducts = products.filter(product => product.section.id === sectionId);

    return (
        <div className={`${classes.catalogSection__catalog} cc-grid cc-cgap-5 cc-rgap-9`}>
            {filteredProducts.map((product, key) => (
                <Fragment key={key}>
                    {key >= firstIndex && (key - firstIndex) % (frequency) == 0
                        ? <CustomProject data={{
                            title: 'Не нашли то что искали?',
                            paragraph: 'Свяжитесь с нами — мы найдем решение',
                            address: settings.safeData('FIRM_NUMBER')
                        }}/> : undefined}
                    <DetailedProductCard data={product}/>
                </Fragment>
            ))}
        </div>
    );
};