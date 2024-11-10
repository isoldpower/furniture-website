import {ProgressiveImageType} from "@/shared/ui-toolkit";
import {Product} from "@/entities/product";

export interface Section {
    id: number;
    title: string;
    paragraph: string;
    href_postfix: string;
    preview_image: ProgressiveImageType;
    visible_in_header: boolean;
    visible_in_preview: boolean;
}

export interface SectionDetail extends Section {
    products: Product[];
}