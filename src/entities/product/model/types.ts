import {ReactNode} from "react";
import {ProgressiveImageData} from "@/shared/ui";

export interface ProductCardData {
    title: string;
    materials: string;
    href: string;
    displayImages: ReactNode;
}

export interface ProductData {
    title: string;
    materials: string;
    images: ProgressiveImageData[];
    postfix: string;
}