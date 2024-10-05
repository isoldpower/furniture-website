import {ProgressiveImageType} from "@/shared/ui-toolkit";
import {Product} from "@/entities/product";

export interface Section {
    id: number;
    title: string;
    paragraph: string;
    href_postfix: string;
    preview_image: ProgressiveImageType;
}

export interface SectionDetail extends Section {
    products: Product[];
}