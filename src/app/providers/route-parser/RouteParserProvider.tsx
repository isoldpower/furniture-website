import {createContext, FC, ReactNode} from "react";
import {ProductDetail} from "@/entities/product";
import {SectionDetail} from "@/entities/catalog-section";
import {productsApi, useGetAllProductsQuery} from "@/widgets/product";
import {sectionApi, useGetAllSectionsQuery} from "@/widgets/catalog-section";
import {useRouteArgument, UseRouteArgumentReturn} from "./useRouteArgument";

export type RouteParserContextType = {
    product: UseRouteArgumentReturn<ProductDetail>
    section: UseRouteArgumentReturn<SectionDetail>;
    isLoading?: boolean;
    isError?: boolean;
}

export const RouteParserContext = createContext<RouteParserContextType>({} as RouteParserContextType);

type RouteParserProviderProps = {
    children: ReactNode;
}

export const RouteParserProvider: FC<RouteParserProviderProps> = ({children}) => {
    const productsQuery = useGetAllProductsQuery();
    const sectionQuery = useGetAllSectionsQuery();

    const currentProduct = useRouteArgument(productsQuery, productsApi.getItem, 'item');
    const currentSection = useRouteArgument(sectionQuery, sectionApi.getItem, 'section');

    return (
        <RouteParserContext.Provider value={{
            product: currentProduct,
            section: currentSection,
            isLoading: currentSection.isLoading || currentProduct.isLoading,
            isError: currentProduct.isError || currentSection.isError
        }}>
            {children}
        </RouteParserContext.Provider>
    )
}