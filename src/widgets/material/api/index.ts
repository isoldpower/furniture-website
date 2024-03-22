import materialsJson from './materials.json';
import {Material} from "@/entities/material";

export const materials: Material[] = materialsJson.materials;
export const getMaterial = (id: number) => materials.find(material => material.id === id);
export const getAllMaterials = (ids: number[]) => ids.map(id => getMaterial(id));