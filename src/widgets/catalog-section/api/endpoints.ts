import globalApi from "../../../app/redux/api/globalApi";
import {Section, SectionDetail} from "@/entities/catalog-section";
import {apiRoutes, CATALOGUE_API_POSTFIX} from "@/app/static";

export const sectionApi = globalApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSections: builder.query<Section[], void>({
            query: () => apiRoutes[CATALOGUE_API_POSTFIX].sections,
        }),
        getSection: builder.query<SectionDetail, number>({
            query: (id) => apiRoutes[CATALOGUE_API_POSTFIX].sectionDetails(id),
        }),
    })
});

export const {useGetAllSectionsQuery, useGetSectionQuery} = sectionApi;