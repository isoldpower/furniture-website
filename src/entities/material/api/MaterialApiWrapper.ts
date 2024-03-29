import {MaterialApiHandler} from "@/entities/material/api/MaterialApiHandler";
import {Material, MaterialAdvantage} from "@/entities/material";

export class MaterialApiWrapper {
    constructor(apiHandler: MaterialApiHandler, advantageDictionary: MaterialAdvantage[]) {
        this.apiHandler = apiHandler;
        this.advantageDictionary = advantageDictionary;
    }

    private readonly apiHandler: MaterialApiHandler;
    private readonly advantageDictionary: MaterialAdvantage[];

    getMaterial(id: number): Material {
        return this.apiHandler.getItem(id);
    }

    getMaterials(ids: number[]): Material[] {
        return this.apiHandler.getItems(ids);
    }

    getAll(): Material[] {
        return this.apiHandler.getAll();
    }

    getAdvantageIds(id: number): number[] {
        const records = this.advantageDictionary.filter(iterator => iterator.materialId === id);
        return records.map(record => record.advantageId);
    }

}