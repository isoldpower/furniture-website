import {ProductApiHandler} from "@/entities/product";
import {ProductAxiosApiHandler} from "@/entities/product";
import {apiRoutes, CATALOGUE_API_POSTFIX} from "@/app/static";

export const productsApi: ProductApiHandler = new ProductAxiosApiHandler(apiRoutes[CATALOGUE_API_POSTFIX].products);
export * from './endpoints';