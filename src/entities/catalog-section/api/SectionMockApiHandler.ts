import {Section, SectionApiHandler} from "@/entities/catalog-section";
import {ListMockApiHandler} from "@/shared/lib/api/ListMockApiHandler";

export class SectionMockApiHandler extends ListMockApiHandler<Section> implements SectionApiHandler{
}