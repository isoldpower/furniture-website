import {createContext, FC, ReactNode, useEffect, useRef, useState} from "react";
import {ProductDetail} from "@/entities/product";
import {SectionDetail} from "@/entities/catalog-section";
import {useParams} from "react-router-dom";
import {productsApi, useGetAllProductsQuery} from "@/widgets/product";
import {sectionApi, useGetAllSectionsQuery} from "@/widgets/catalog-section";

export type RouteParserContextType = {
    product: ProductDetail;
    section: SectionDetail;
    isSectionLoading?: boolean;
    isProductLoading?: boolean;
    isSectionError?: boolean;
    isProductError?: boolean;
    isLoading?: boolean;
    isError?: boolean;
}

export const RouteParserContext = createContext<RouteParserContextType>({} as RouteParserContextType);

type RouteParserProviderProps = {
    children: ReactNode;
}

export const RouteParserProvider: FC<RouteParserProviderProps> = ({children}) => {
    const {...productsQuery} = useGetAllProductsQuery();
    const {...sectionsQuery} = useGetAllSectionsQuery();
    const {item, section} = useParams();

    const [isSectionLoading, setIsSectionLoading] = useState(true);
    const [isSectionError, setIsSectionError] = useState(false);
    const [isProductLoading, setIsProductLoading] = useState(true);
    const [isProductError, setIsProductError] = useState(false);

    const itemsDictionary = useRef<{ [name: string]: string }>({});
    const sectionsDictionary = useRef<{ [name: string]: string }>({});

    const [currentProduct, setProduct] = useState<ProductDetail>(undefined);
    const [currentSection, setSection] = useState<SectionDetail>(undefined);

    useEffect(() => {
        if (productsQuery.currentData) {
            productsQuery.currentData.forEach(product => {
                const clearPostfix = product.href_postfix.replaceAll('/', '');
                itemsDictionary.current[clearPostfix] = product.id.toString();
            });
        }
    }, [productsQuery.currentData]);

    useEffect(() => {
        if (sectionsQuery.currentData) {
            sectionsQuery.currentData.forEach(section => {
                const clearPostfix = section.href_postfix.replaceAll('/', '');
                sectionsDictionary.current[clearPostfix] = section.id.toString();
            });
        }
    }, [sectionsQuery.currentData]);

    useEffect(() => {
        if (item && itemsDictionary.current[item]) {
            productsApi.getItem(parseInt(itemsDictionary.current[item]))
                .then((product) => setProduct(product))
                .catch(() => setIsProductError(true))
                .finally(() => setIsProductLoading(false));
        } else {
            setIsProductLoading(false);
            setProduct(undefined);
        }
    }, [item, productsQuery.currentData]);

    useEffect(() => {
        if (section && sectionsDictionary.current[section]) {
            sectionApi.getItem(parseInt(sectionsDictionary.current[section]))
                .then((section) => setSection(section))
                .catch(() => setIsSectionError(true))
                .finally(() => setIsSectionLoading(false))
        } else {
            setIsSectionLoading(false);
            setSection(undefined);
        }
    }, [section, sectionsQuery.currentData]);

    return (
        <RouteParserContext.Provider value={{
            product: currentProduct,
            section: currentSection,
            isLoading: isProductLoading || isSectionLoading,
            isError: isProductError || isSectionError,
            isSectionLoading,
            isProductLoading,
            isSectionError,
            isProductError
        }}>
            {children}
        </RouteParserContext.Provider>
    )
}