import {ProductData} from "@/entities/product/model";

export interface CatalogSpoilerData {
    title: string;
    href: string;
    products: ProductData[];
}