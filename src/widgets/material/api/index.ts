import materialsJson from './mock/materials.json';
import materialAdvantages from './mock/material-advantages.json';
import {MaterialApiWrapper} from "@/entities/material/api/MaterialApiWrapper";
import {MaterialMockApiHandler} from "@/entities/material/api/MaterialMockApiHandler";
import {MaterialApiHandler} from "@/entities/material/api/MaterialApiHandler";

const apiHandler: MaterialApiHandler = new MaterialMockApiHandler(materialsJson.materials);
export const materialsApi: MaterialApiWrapper = new MaterialApiWrapper(apiHandler, materialAdvantages.advantages);