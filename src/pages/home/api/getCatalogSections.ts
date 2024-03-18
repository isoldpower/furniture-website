import {products} from "@/shared/api";
import {SectionData} from "@/entities";

export const getCatalogSections = (): SectionData[] => {
    return products.slice(0, 3);
}