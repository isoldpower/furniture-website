import {ProgressiveImageType} from "@/shared/ui";
import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {apiPrefix} from "@/app/static";
import {FormData} from "@/features";

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({baseUrl: apiPrefix}),
    endpoints: (builder) => ({
        getImage: builder.query<ProgressiveImageType, number>({
            query: (id) => `shared/images/${id}/`
        }),
        getAllImages: builder.query<ProgressiveImageType[], void>({
            query: () => `shared/images/`
        }),

        postRequest: builder.mutation<FormData, FormData>({
            query: (data: FormData) => ({
                url: 'moderate/callbacks',
                method: 'POST',
                body: data
            })
        })
    })
})

export default globalApi;
export const {useGetImageQuery, useGetAllImagesQuery, usePostRequestMutation} = globalApi
