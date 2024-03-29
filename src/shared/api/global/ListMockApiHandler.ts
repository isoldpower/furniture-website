import {ApiHandler, DBItem} from "@/shared/api/global/ApiHandler";

export class ListMockApiHandler<T extends DBItem> implements ApiHandler<T> {
    constructor(items: T[]) {
        this.items = items;
    }

    items: T[];

    getAll() {
        return this.items;
    }

    getItem(id: number) {
        return this.items.find(item => item.id === id);
    }

    getItems(ids: number[]) {
        return ids.map(id => {
            return this.items.find(item => item.id === id);
        })
    }
}