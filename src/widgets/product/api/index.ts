import {ProductApiHandler} from "@/entities/product/api/ProductApiHandler";
import {ProductAxiosApiHandler} from "@/entities/product/api/ProductAxiosApiHandler";

export const productsApi: ProductApiHandler = new ProductAxiosApiHandler('/catalog/products/');