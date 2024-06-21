import {ProgressiveImageType} from "@/shared/ui-toolkit";
import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {API_PREFIX} from "@/app/static";
import {Product} from "@/entities/product";
import {FormData} from "@/features/feedback";

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({baseUrl: API_PREFIX}),
    endpoints: (builder) => ({
        getImage: builder.query<ProgressiveImageType, number>({
            query: (id) => `shared/images/${id}/`
        }),
        getAllImages: builder.query<ProgressiveImageType[], void>({
            query: () => `shared/images/`
        }),
        getSettings: builder.query<{key: string, value: string}[], void>({
            query: () => `settings/static/`
        }),

        postRequest: builder.mutation<{form: FormData, product: Product}, {form: FormData, product: number}>({
            query: (data: {form: FormData, product: number}) => ({
                url: 'feedback/callbacks/',
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
