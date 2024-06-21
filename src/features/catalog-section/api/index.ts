import {SectionApiHandler, SectionAxiosApiHandler} from "@/entities/catalog-section";
import {SECTION_API_POSTFIX} from "@/app/static";

export * from './endpoints';
export const sectionApi: SectionApiHandler = new SectionAxiosApiHandler(SECTION_API_POSTFIX);