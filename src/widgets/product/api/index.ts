import productsJson from './products.json';
import imagesJson from './product-images.json';
import materialsJson from './product-materials.json';
import {Product, ProductImage, ProductMaterial} from "@/entities/product";

const imagesDictionary: ProductImage[] = imagesJson.images;
const materialsDictionary: ProductMaterial[] = materialsJson.materials;

export const products: Product[] = productsJson.products;

export const getImageIdsByProductId = (id: number) => imagesDictionary
    .filter(image => image.productId === id)
    .map(image => image.imageId);

export const getMaterialIdsByProductId = (id: number) => materialsDictionary
    .filter(material => material.productId === id)
    .map(material => material.materialId);