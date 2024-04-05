import {FC, Fragment} from "react";
import '@/app/scss/main.scss';
import classes from './SectionProductsList.module.scss';
import {CustomProject} from "@/pages/section-page/ui/mixins/custom-project/CustomProject";
import {DetailedProductCard, useGetAllProductsQuery} from "@/widgets/product";

interface SectionProductsListProps {
    sectionId: number;
}

export const SectionProductsList: FC<SectionProductsListProps> = ({sectionId}: SectionProductsListProps) => {
    const {currentData : products, isLoading, isError} = useGetAllProductsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    const filteredProducts = products.filter(product => product.section.id === sectionId);

    return (
        <div className={`${classes.catalogSection__catalog} cc-grid cc-cgap-5 cc-rgap-9`}>
            {filteredProducts.map((product, key) => (
                <Fragment key={key}>
                    {key === 2 ? <CustomProject data={{
                        title: 'Не нашли то что искали?',
                        paragraph: 'Свяжитесь с нами — мы найдем решение',
                        address: '+7 (999) 123-34-54'
                    }}/> : null}
                    <DetailedProductCard data={product}/>
                </Fragment>
            ))}
        </div>
    );
};