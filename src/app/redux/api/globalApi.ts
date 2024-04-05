import {Product} from "@/entities/product";
import {ProgressiveImageType} from "@/shared/ui";
import {Material} from "@/entities/material";
import {Section} from "@/entities/catalog-section";
import {Advantage} from "@/entities/advantage";
import {PortfolioItemData} from "@/entities/portfolio";
import {Process} from "@/entities/process";
import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {apiPrefix} from "@/app/static";

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({baseUrl: apiPrefix}),
    endpoints: (builder) => ({
        getImage: builder.query<ProgressiveImageType, number>({
            query: (id) => `shared/images/${id}/`
        }),
        getAllImages: builder.query<ProgressiveImageType[], void>({
            query: () => `shared/images/`
        })
    })
})

export default globalApi;
export const {useGetImageQuery, useGetAllImagesQuery} = globalApi
