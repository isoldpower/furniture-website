import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import {sectionByPostfix} from "@/shared/lib";
import {SectionDisplay} from "@/widgets/catalog-section";
import {Section} from "@/entities/catalog-section";
import {useGetAllProductsQuery} from "@/widgets/product";


interface CatalogSectionLoaderProps extends BaseHTMLAttributes<HTMLDivElement>{
    section: Section;
}

export const CatalogSectionLoader: FC<CatalogSectionLoaderProps> = ({section, ...props}: CatalogSectionLoaderProps) => {
    const {currentData : products, isLoading, isError} = useGetAllProductsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    const filteredProducts = products.filter(product => product.section.id == section.id);

    return (
        <SectionDisplay data={{
            ...section,
            products: filteredProducts,
            sectionLink: true,
            href: sectionByPostfix(section.href_postfix)}
        } {...props} id={section.id.toString()} />
    );
};