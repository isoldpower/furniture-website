import {ProgressiveImageData} from "@/shared/ui";
import {ProductData} from "@/entities";

export interface SectionData {
    title: string;
    image: ProgressiveImageData;
    hrefPostfix: string;
    products: ProductData[];
}

export interface SectionPreviewData {
    title: string;
    image: ProgressiveImageData;
}