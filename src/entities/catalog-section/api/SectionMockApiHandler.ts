import {Section, SectionApiHandler} from "@/entities/catalog-section";
import {ListMockApiHandler} from "@/shared/api/global/ListMockApiHandler";

export class SectionMockApiHandler extends ListMockApiHandler<Section> implements SectionApiHandler{
}