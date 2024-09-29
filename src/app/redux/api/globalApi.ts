import {ProgressiveImageType} from "@/shared/ui-toolkit";
import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {Product} from "@/entities/product";
import {FormData} from "@/features/feedback";
import {
    API_HOST_WITH_PREFIX,
    apiRoutes,
    FEEDBACK_API_POSTFIX,
    PARTIALS_API_POSTFIX,
    SETTINGS_API_POSTFIX
} from "@/app/static";

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({baseUrl: API_HOST_WITH_PREFIX}),
    endpoints: (builder) => ({
        getImage: builder.query<ProgressiveImageType, number>({
            query: (id) => apiRoutes[PARTIALS_API_POSTFIX].imageDetail(id)
        }),
        getAllImages: builder.query<ProgressiveImageType[], void>({
            query: () => apiRoutes[PARTIALS_API_POSTFIX].images
        }),
        getSettings: builder.query<{key: string, value: string}[], void>({
            query: () => apiRoutes[SETTINGS_API_POSTFIX].settings
        }),
        postRequest: builder.mutation<{form: FormData, product: Product}, {form: FormData, product: number}>({
            query: (data: {form: FormData, product: number}) => ({
                url: apiRoutes[FEEDBACK_API_POSTFIX].phoneCall,
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
