import {PortfolioApiHandler} from "@/entities/portfolio/api/PortfolioApiHandler";
import {PortfolioItemData} from "@/entities/portfolio";

export class PortfolioMockApiHandler implements PortfolioApiHandler {
    constructor(items: PortfolioItemData[]) {
        this.items = items;
    }

    private readonly items: PortfolioItemData[]

    getAll(): PortfolioItemData[] {
        return this.items;
    }

    getItem(id: number): PortfolioItemData {
        return this.items.find(item => item.id === id);
    }

    getItems(ids: number[]): PortfolioItemData[] {
        return ids.map(id => {
            return this.items.find(item => item.id === id);
        })
    }
}