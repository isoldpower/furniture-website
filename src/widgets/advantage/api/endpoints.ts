import globalApi from "../../../app/redux/api/globalApi";
import {Advantage} from "@/entities/advantage/model";
import {apiRoutes, PARTIALS_API_POSTFIX} from "@/app/static";

export const advantageApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAdvantages: builder.query<Advantage[], void>({
            query: () => apiRoutes[PARTIALS_API_POSTFIX].advantages,
        }),
        getAdvantage: builder.query<Advantage, number>({
            query: (id) => apiRoutes[PARTIALS_API_POSTFIX].advantageDetail(id),
        }),
        getAdvantagesOfFirm: builder.query<Advantage[], void>({
            query: () => apiRoutes[PARTIALS_API_POSTFIX].advantages + '?purpose=firm',
        }),
        getAdvantagesOfMaterial: builder.query<Advantage[], void>({
            query: () => apiRoutes[PARTIALS_API_POSTFIX].advantages + '?purpose=material',
        }),
    })
});

export const {useGetAdvantageQuery, useGetAllAdvantagesQuery, useGetAdvantagesOfFirmQuery, useGetAdvantagesOfMaterialQuery} = advantageApi;