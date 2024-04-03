import {ApiHandler, DBItem} from "@/shared/api/model/ApiHandler";

export class MockApiHandler<T extends DBItem> implements ApiHandler<T> {
    constructor(items: T[]) {
        this.items = items;
    }

    items: T[];

    getAll(): Promise<T[]> {
        return new Promise(() => this.items);
    }

    getItem(id: number): Promise<T> {
        return new Promise(() => this.items.find(item => item.id === id));
    }

    getItems(ids: number[]): Promise<T>[] {
        return ids.map(id => {
            return new Promise(() => this.items
                .find(item => item.id === id));
        })
    }
}