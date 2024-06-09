import {Product, ProductDetail} from "@/entities/product";
import {MockApiHandler} from "@/shared/api/model/MockApiHandler";
import {ProductApiHandler} from "@/entities/product";

export class ProductMockApiHandler extends MockApiHandler<Product> implements ProductApiHandler {
    getProductDetail = (id: number): Promise<ProductDetail> => {
        return new Promise(() => ({
            ...this.items.find(item => item.id === id),
            images: [],
            materials: []
        }))
    }

    getProductsBySection = (sectionId: number): Promise<ProductDetail[]> => {
        return new Promise(() => this.items.filter(item => item.section.id == sectionId));
    }

    getProductByPostfix = (postfix: string): Promise<ProductDetail> => {
        return new Promise(() => this.items.find(item => item.href_postfix == postfix));
    }
}