import {Product} from "@/entities/product";
import {ProgressiveImageType} from "@/shared/ui";
import {Material} from "@/entities/material";
import {Section} from "@/entities/catalog-section";
import {Advantage} from "@/entities/advantage";
import {PortfolioItemData} from "@/entities/portfolio";
import {Process} from "@/entities/process";
import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";

export const globalApi = createApi({
    reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000/api/v1/'}),
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

        getAllSections: builder.query<Section[], void>({
            query: () => 'catalog/sections/'
        }),
        getSection: builder.query<Section, number>({
            query: (id) => `catalog/sections/${id}/`,
        }),

        getAllAdvantages: builder.query<Advantage[], void>({
            query: () => 'landing/advantages/',
        }),
        getAdvantage: builder.query<Advantage, number>({
            query: (id) => `landing/advantages/${id}/`
        }),
        getAdvantagesOfFirm: builder.query<Advantage[], void>({
            query: () => `landing/advantages/?purpose=firm`
        }),
        getAdvantagesOfMaterial: builder.query<Advantage[], void>({
           query: () => `landing/advantages/?purpose=material`
        }),

        getMaterial: builder.query<Material, number>({
            query: (id: number) => `landing/materials/${id}/`
        }),
        getAllMaterials: builder.query<Material[], void>({
            query: () => 'landing/materials/'
        }),
        getMaterialAdvantages: builder.query<Advantage[], number>({
            query: (id) => `landing/materials/${id}/advantages/`
        }),

        getPortfolio: builder.query<PortfolioItemData[], void>({
            query: () => 'landing/portfolio/'
        }),

        getProcess: builder.query<Process[], void>({
            query: () => 'landing/process/'
        }),

        getImage: builder.query<ProgressiveImageType, number>({
            query: (id) => `shared/images/${id}/`
        }),
        getAllImages: builder.query<ProgressiveImageType[], void>({
            query: () => `shared/images/`
        })
    })
})

export default globalApi;
export const {useGetProductQuery, useGetProductImagesQuery, useGetProductMaterialsQuery, useGetAllProductsQuery} = globalApi;
export const {useGetAllSectionsQuery, useGetSectionQuery} = globalApi;
export const {useGetAdvantageQuery, useGetAllAdvantagesQuery, useGetAdvantagesOfFirmQuery, useGetAdvantagesOfMaterialQuery} = globalApi
export const {useGetAllMaterialsQuery, useGetMaterialAdvantagesQuery, useGetMaterialQuery} = globalApi
export const {useGetPortfolioQuery} = globalApi
export const {useGetProcessQuery} = globalApi
export const {useGetImageQuery, useGetAllImagesQuery} = globalApi