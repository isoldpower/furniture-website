export interface ApiHandler<T extends DBItem> {
    getItem: (id: number) => Promise<T>;
    getItems: (ids: number[]) => Promise<T>[];
    getAll: () => Promise<T[]>;
}

export interface DBItem {
    id: number;
}