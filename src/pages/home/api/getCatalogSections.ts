import {products} from "@/shared/api";
import {SectionData} from "@/entities/catalog-section/model";

export const getCatalogSections = (): SectionData[] => {
    return products.slice(0, 3);
}