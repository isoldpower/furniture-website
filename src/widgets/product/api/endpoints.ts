import globalApi from "../../../app/redux/api/globalApi";
import {Product} from "@/entities/product";
import {ProgressiveImageType} from "@/shared/ui";
import {Material} from "@/entities/material";

export const productApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            query: () => `catalog/products/`,
        }),
        getProduct: builder.query<Product, number>({
            query: (id) =>  `catalog/products/${id}/`
        }),
        getProductImages: builder.query<ProgressiveImageType[], number>({
            query: (id) => `catalog/products/${id}/images/`,
        }),
        getProductMaterials: builder.query<Material[], number>({
            query: (id) => `catalog/products/${id}/materials/`
        }),
    })
});

export const {useGetProductQuery, useGetProductImagesQuery, useGetProductMaterialsQuery, useGetAllProductsQuery} = productApi;
