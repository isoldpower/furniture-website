import {SectionApiHandler} from "@/entities/catalog-section";
import {SectionAxiosApiHandler} from "@/entities/catalog-section";

export const sectionApi: SectionApiHandler = new SectionAxiosApiHandler('/catalog/sections/');
export * from './endpoints';