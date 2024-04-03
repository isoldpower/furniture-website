import {SectionApiHandler} from "@/entities/catalog-section";
import {getCatalogRequest} from "@/shared/lib/api/getApiRequest";
import {SectionAxiosApiHandler} from "@/entities/catalog-section/api/SectionAxiosApiHandler";

export const sectionApi: SectionApiHandler = new SectionAxiosApiHandler(getCatalogRequest('/sections/'));