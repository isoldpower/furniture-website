import globalApi from "../../../app/redux/api/globalApi";
import {Section} from "@/entities/catalog-section";

export const sectionApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSections: builder.query<Section[], void>({
            query: () => 'catalog/sections/'
        }),
        getSection: builder.query<Section, number>({
            query: (id) => `catalog/sections/${id}/`,
        }),
    })
});

export const {useGetAllSectionsQuery, useGetSectionQuery} = sectionApi;