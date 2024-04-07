import {ProgressiveImageType} from "@/shared/ui";
import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {apiPrefix} from "@/app/static";
import {FormData} from "@/features";
import {Product} from "@/entities/product";

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
        getSettings: builder.query<{key: string, value: string}[], void>({
            query: () => `moderate/static/`
        }),

        postRequest: builder.mutation<{form: FormData, product: Product}, {form: FormData, product: number}>({
            query: (data: {form: FormData, product: number}) => ({
                url: 'moderate/callbacks/',
                method: 'POST',
                body: {
                    name: data.form.name.value,
                    email: data.form.mail.value,
                    phone: data.form.phone.value,
                    product: data.product
                }
            })
        })
    })
})

export default globalApi;
export const {useGetImageQuery, useGetSettingsQuery, useGetAllImagesQuery, usePostRequestMutation} = globalApi
