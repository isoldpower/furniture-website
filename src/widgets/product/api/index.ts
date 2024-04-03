import {ProductApiHandler} from "@/entities/product/api/ProductApiHandler";
import {ProductAxiosApiHandler} from "@/entities/product/api/ProductAxiosApiHandler";
import {getCatalogRequest} from "@/shared/lib/api/getApiRequest";

export const productsApi: ProductApiHandler = new ProductAxiosApiHandler(getCatalogRequest('/products/'));