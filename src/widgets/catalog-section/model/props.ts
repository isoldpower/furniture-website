import {Product} from "@/entities/product";

export interface SectionDisplayData {
    title: string;
    href: string;
    products: Product[];
    sectionLink?: boolean;
}