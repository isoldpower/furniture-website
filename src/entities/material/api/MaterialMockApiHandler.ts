import {Material} from "@/entities/material";
import {ListMockApiHandler} from "@/shared/api/global/ListMockApiHandler";
import {MaterialApiHandler} from "@/entities/material/api/MaterialApiHandler";

export class MaterialMockApiHandler extends ListMockApiHandler<Material> implements MaterialApiHandler{
}