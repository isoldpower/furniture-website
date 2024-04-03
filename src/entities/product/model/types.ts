import {Section} from "@/entities/catalog-section";
import {ProgressiveImageType} from "@/shared/ui";
import {Material} from "@/entities/material";

export interface Product {
    id: number;
    title: string;
    description: string;
    duration: string;
    cost: string;
    href_postfix: string;
    section: Section;
}

export interface ProductDetail extends Product {
    images: ProgressiveImageType[];
    materials: Material[];
}