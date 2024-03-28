import {ProductApiHandler} from "@/entities/product/api/ProductApiHandler";
import {Product, ProductImage, ProductMaterial} from "@/entities/product";

export class ProductApiWrapper {
    constructor(apiHandler: ProductApiHandler, materials: ProductMaterial[], images: ProductImage[]) {
        this.apiHandler = apiHandler;
        this.imagesDictionary = images;
        this.materialsDictionary = materials;
    }

    private readonly apiHandler: ProductApiHandler;
    private readonly materialsDictionary: ProductMaterial[];
    private readonly imagesDictionary: ProductImage[];

    getAll(): Product[] {
        return this.apiHandler.getAll();
    }

    getByPostfix(postfix: string): Product {
        const products = this.apiHandler.getAll();
        return products.find(product => product.hrefPostfix === postfix);
    }

    getSectionProducts(sectionId: number, excludedProducts: number[] = []): Product[] {
        const products = this.apiHandler.getAll();
        const sectionProducts = products.filter(product => product.sectionId === sectionId);
        return sectionProducts.filter(product => !excludedProducts.includes(product.id));
    }

    getMaterialIds(id: number): number[] {
        const records = this.materialsDictionary;
        const actualRecords = records.filter(record => record.productId === id);
        return actualRecords.map(record => record.materialId);
    }

    getImageIds(id: number): number[] {
        const records = this.imagesDictionary;
        const actualRecords = records.filter(record => record.productId === id);
        return actualRecords.map(record => record.imageId);
    }
}