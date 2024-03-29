import firmAdvantagesJson from './mock/firm-advantages.json';
import materialAdvantagesJson from './mock/material-advantages.json';
import {AdvantageApiHandler, AdvantageMockApiHandler} from "@/entities/advantage";

export const materialsAdvantagesApiHandler: AdvantageApiHandler = new AdvantageMockApiHandler(materialAdvantagesJson.advantages);
export const firmAdvantagesApiHandler: AdvantageApiHandler = new AdvantageMockApiHandler(firmAdvantagesJson.advantages);