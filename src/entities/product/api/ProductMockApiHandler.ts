import {ProductApiHandler} from "@/entities/product/api/ProductApiHandler";
import {Product} from "@/entities/product";

export class ProductMockApiHandler implements ProductApiHandler {
    constructor(products: Product[]) {
        this.products = products;
    }

    private readonly products: Product[]

    getAll(): Product[] {
        return this.products;
    }

    getItem(id: number): Product {
        return this.products.find(product => product.id === id);
    }

    getItems(ids: number[]): Product[] {
        return ids.map(id => {
            return this.products.find(product => product.id === id);
        })
    }
}