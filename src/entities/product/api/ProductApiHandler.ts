import {Product} from "@/entities/product";

export interface ProductApiHandler {
    getAll(): Product[];
    getItem(id: number): Product
    getItems(ids: number[]): Product[];
}