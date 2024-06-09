import {ProductApiHandler} from "@/entities/product";
import {ProductAxiosApiHandler} from "@/entities/product";

export const productsApi: ProductApiHandler = new ProductAxiosApiHandler('/catalog/products/');
export * from './endpoints';