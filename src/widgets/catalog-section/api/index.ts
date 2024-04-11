import {SectionApiHandler} from "@/entities/catalog-section";
import {SectionAxiosApiHandler} from "@/entities/catalog-section/api/SectionAxiosApiHandler";

export const sectionApi: SectionApiHandler = new SectionAxiosApiHandler('/catalog/sections/');
export * from './endpoints';