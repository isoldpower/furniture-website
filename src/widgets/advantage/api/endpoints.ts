import globalApi from "../../../app/redux/api/globalApi";
import {Advantage} from "@/entities/advantage/model";

export const advantageApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
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
    })
});

export const {useGetAdvantageQuery, useGetAllAdvantagesQuery, useGetAdvantagesOfFirmQuery, useGetAdvantagesOfMaterialQuery} = advantageApi;