import heroImagesJson from './hero-images.json';
import productsJson from './products.json';
import {ProgressiveImageData} from "@/shared/ui";
import {ProductData} from "@/entities/product/model";

export const heroImages: ProgressiveImageData[] = heroImagesJson.images;
export const products: ProductData[] = productsJson.products;