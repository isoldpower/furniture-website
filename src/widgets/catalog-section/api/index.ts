import sectionsJson from './mock/sections.json';
import {SectionMockApiHandler} from "@/entities/catalog-section/api/SectionMockApiHandler";
import {SectionApiWrapper} from "@/entities/catalog-section/api/SectionApiWrapper";
import {SectionApiHandler} from "@/entities/catalog-section";

const sectionApiHandler: SectionApiHandler = new SectionMockApiHandler(sectionsJson.sections);
export const sectionApi: SectionApiWrapper = new SectionApiWrapper(sectionApiHandler);