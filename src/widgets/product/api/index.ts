import productsJson from './mock/products.json';
import imagesJson from './mock/product-images.json';
import materialsJson from './mock/product-materials.json';
import {ProductImage, ProductMaterial} from "@/entities/product";
import {ProductApiHandler} from "@/entities/product/api/ProductApiHandler";
import {ProductMockApiHandler} from "@/entities/product/api/ProductMockApiHandler";
import {ProductApiWrapper} from "@/entities/product/api/ProductApiWrapper";

const imagesDictionary: ProductImage[] = imagesJson.images;
const materialsDictionary: ProductMaterial[] = materialsJson.materials;
const productApiHandler: ProductApiHandler = new ProductMockApiHandler(productsJson.products);

export const productsApi: ProductApiWrapper = new ProductApiWrapper(productApiHandler, materialsDictionary, imagesDictionary);