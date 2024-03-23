import firmAdvantagesJson from './firm-advantages.json';
import materialAdvantagesJson from './material-advantages.json';
import {Advantage} from "@/entities/advantage";

export const firmAdvantages: Advantage[] = firmAdvantagesJson.advantages;
export const materialAdvantages: Advantage[] = materialAdvantagesJson.advantages;

const getMaterialAdvantage = (id: number) => materialAdvantages.find(advantage => advantage.id === id);
export const getAllMaterialAdvantages = (ids: number[]) => ids.map(id => getMaterialAdvantage(id));