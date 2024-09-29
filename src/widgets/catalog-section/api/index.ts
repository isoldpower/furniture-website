import {SectionApiHandler, SectionAxiosApiHandler} from "@/entities/catalog-section";
import {apiRoutes, CATALOGUE_API_POSTFIX} from "@/app/static";

export { useGetAllSectionsQuery, useGetSectionQuery } from './endpoints';
export const sectionApi: SectionApiHandler = new SectionAxiosApiHandler(apiRoutes[CATALOGUE_API_POSTFIX].sections);