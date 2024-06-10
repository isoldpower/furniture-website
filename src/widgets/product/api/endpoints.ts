import globalApi from "../../../app/redux/api/globalApi";
import {Product} from "@/entities/product";
import {ProgressiveImageType} from "@/shared/ui-toolkit";
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
        getImportantProducts: builder.query<Product[], boolean>({
            query: (isImportant) => `catalog/products/?important=${isImportant}`
        })
    })
});

export const {useGetProductQuery, useGetImportantProductsQuery, useGetProductImagesQuery, useGetProductMaterialsQuery, useGetAllProductsQuery} = productApi;
