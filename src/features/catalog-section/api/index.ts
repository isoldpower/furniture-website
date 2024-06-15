import {SectionApiHandler, SectionAxiosApiHandler} from "@/entities/catalog-section";

export * from './endpoints';
export const sectionApi: SectionApiHandler = new SectionAxiosApiHandler('/catalog/sections/');