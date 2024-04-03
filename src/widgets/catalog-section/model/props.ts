import {Product} from "@/entities/product";

export interface SectionDisplayData {
    products: Product[];
    title: string;
    href: string;
    sectionLink?: boolean;
}