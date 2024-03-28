import {Material} from "@/entities/material";

export interface MaterialApiHandler {
    getMaterial: (id: number) => Material;
    getMaterials: (ids: number[]) => Material[];
    getAll: () => Material[];
}