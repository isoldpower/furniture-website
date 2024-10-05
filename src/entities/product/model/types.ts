import {ProgressiveImageType} from "@/shared/ui-toolkit";
import {Material} from "@/entities/material";

export interface Product {
    id: number;
    title: string;
    description: string;
    preparation_time: string;
    estimated_cost: string;
    href_postfix: string;
    important: boolean;
}

export interface ProductDetail extends Product {
    images: ProgressiveImageType[];
    materials: Material[];
}