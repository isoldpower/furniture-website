import {MaterialApiHandler} from "@/entities/material/api/MaterialApiHandler";
import {Material} from "@/entities/material";

export class MaterialMockApiHandler implements MaterialApiHandler {
    constructor(materials: Material[]) {
        this.materials = materials;
    }

    materials: Material[];

    getMaterial(id: number) {
        return this.materials.find(material => material.id === id);
    }

    getMaterials(ids: number[]) {
        return ids.map(id => {
            return this.materials.find(material => material.id === id);
        });
    }

    getAll(): Material[] {
        return this.materials;
    }
}