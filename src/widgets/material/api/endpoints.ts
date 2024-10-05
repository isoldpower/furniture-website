import globalApi from "../../../app/redux/api/globalApi";
import {Material, MaterialDetail} from "@/entities/material";
import {apiRoutes, CATALOGUE_API_POSTFIX} from "@/app/static";

export const materialApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getMaterial: builder.query<MaterialDetail, number>({
            query: (id: number) => apiRoutes[CATALOGUE_API_POSTFIX].materialDetails(id)
        }),
        getAllMaterials: builder.query<Material[], void>({
            query: () => apiRoutes[CATALOGUE_API_POSTFIX].materials
        })
    })
});

export const {useGetAllMaterialsQuery, useGetMaterialQuery} = materialApi;
