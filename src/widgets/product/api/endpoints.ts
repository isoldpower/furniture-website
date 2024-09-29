import globalApi from "../../../app/redux/api/globalApi";
import {Product, ProductDetail} from "@/entities/product";
import {apiRoutes, CATALOGUE_API_POSTFIX} from "@/app/static";

export const productApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            query: () => apiRoutes[CATALOGUE_API_POSTFIX].products,
        }),
        getProduct: builder.query<ProductDetail, number>({
            query: (id) =>  apiRoutes[CATALOGUE_API_POSTFIX].productDetails(id),
        }),
        getImportantProducts: builder.query<Product[], boolean>({
            query: (isImportant) => apiRoutes[CATALOGUE_API_POSTFIX].products + `?important=${isImportant}`
        })
    })
});

export const {useGetProductQuery, useGetImportantProductsQuery, useGetAllProductsQuery} = productApi;
