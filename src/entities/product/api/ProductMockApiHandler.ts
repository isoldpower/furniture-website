import {Product} from "@/entities/product";
import {ListMockApiHandler} from "@/shared/api/global/ListMockApiHandler";
import {ProductApiHandler} from "@/entities/product/api/ProductApiHandler";

export class ProductMockApiHandler extends ListMockApiHandler<Product> implements ProductApiHandler {
}