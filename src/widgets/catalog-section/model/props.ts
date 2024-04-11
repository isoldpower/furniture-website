import {Product} from "@/entities/product";

export interface SectionDisplayData {
    spoilerProducts: Product[];
    carouselProducts: Product[];
    title: string;
    href: string;
    sectionLink?: boolean;
}