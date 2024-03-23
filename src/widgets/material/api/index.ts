import materialsJson from './materials.json';
import materialAdvantages from './material-advantages.json';
import {Material, MaterialAdvantage} from "@/entities/material";

export const materials: Material[] = materialsJson.materials;
export const getMaterial = (id: number) => materials.find(material => material.id === id);
export const getAllMaterials = (ids: number[]) => ids.map(id => getMaterial(id));

export const advantages: MaterialAdvantage[] = materialAdvantages.advantages;
export const getAdvantagesIds = (materialId: number) => advantages.filter(advantage => advantage.materialId === materialId).map(record => record.advantageId);