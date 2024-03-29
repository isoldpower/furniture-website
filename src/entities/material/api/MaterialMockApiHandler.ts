import {Material} from "@/entities/material";
import {ListMockApiHandler} from "@/shared/lib/api/ListMockApiHandler";
import {MaterialApiHandler} from "@/entities/material/api/MaterialApiHandler";

export class MaterialMockApiHandler extends ListMockApiHandler<Material> implements MaterialApiHandler{
}