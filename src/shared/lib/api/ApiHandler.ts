export interface ApiHandler<T extends DBItem> {
    getItem: (id: number) => T;
    getItems: (ids: number[]) => T[];
    getAll: () => T[];
}

export interface DBItem {
    id: number;
}