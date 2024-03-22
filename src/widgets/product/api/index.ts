import productsJson from './products.json';
import imagesJson from './product-images.json';
import {Product, ProductImage} from "@/entities/product";

export const products: Product[] = productsJson.products;

const imagesDictionary: ProductImage[] = imagesJson.images;
export const getImageIdsByProductId = (id: number) => imagesDictionary
    .filter(images => images.productId === id)
    .map(image => image.imageId);