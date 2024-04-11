import {Product, ProductDetail} from "@/entities/product";
import {ApiHandler} from "@/shared/api/model/ApiHandler";

export interface ProductApiHandler extends ApiHandler<Product> {
    getProductDetail: (id: number) => Promise<ProductDetail>;
    getProductByPostfix: (postfix: string) => Promise<ProductDetail>;
    getProductsBySection: (sectionId: number) => Promise<Product[]>;
}