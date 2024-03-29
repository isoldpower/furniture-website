import {Advantage, AdvantageApiHandler} from "@/entities/advantage";
import {ListMockApiHandler} from "@/shared/api/global/ListMockApiHandler";

export class AdvantageMockApiHandler extends ListMockApiHandler<Advantage> implements AdvantageApiHandler {
}