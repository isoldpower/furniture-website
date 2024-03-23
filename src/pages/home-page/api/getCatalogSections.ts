import {Section} from "@/entities/catalog-section";
import {sections} from "@/widgets/catalog-section";

export const getCatalogSections = (): Section[] => {
    return sections.slice(0, 3);
}