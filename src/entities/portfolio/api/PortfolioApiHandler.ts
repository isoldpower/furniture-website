import {PortfolioItemData} from "@/entities/portfolio";

export interface PortfolioApiHandler {
    getAll(): PortfolioItemData[];
    getItem(id: number): PortfolioItemData
    getItems(ids: number[]): PortfolioItemData[];
}