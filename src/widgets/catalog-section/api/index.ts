import sectionsJson from './sections.json';
import {SectionMockApiHandler} from "@/entities/catalog-section/api/SectionMockApiHandler";
import {SectionApiWrapper} from "@/entities/catalog-section/api/SectionApiWrapper";

const sectionApiHandler = new SectionMockApiHandler(sectionsJson.sections);
export const sectionApi: SectionApiWrapper = new SectionApiWrapper(sectionApiHandler);