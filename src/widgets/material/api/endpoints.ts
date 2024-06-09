import globalApi from "../../../app/redux/api/globalApi";
import {Material} from "@/entities/material";
import {Advantage} from "@/entities/advantage/model";

export const materialApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getMaterial: builder.query<Material, number>({
            query: (id: number) => `landing/materials/${id}/`
        }),
        getAllMaterials: builder.query<Material[], void>({
            query: () => 'landing/materials/'
        }),
        getMaterialAdvantages: builder.query<Advantage[], number>({
            query: (id) => `landing/materials/${id}/advantages/`
        }),
    })
});

export const {useGetAllMaterialsQuery, useGetMaterialAdvantagesQuery, useGetMaterialQuery} = materialApi;
