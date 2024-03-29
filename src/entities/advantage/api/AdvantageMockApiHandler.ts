import {Advantage, AdvantageApiHandler} from "@/entities/advantage";
import {ListMockApiHandler} from "@/shared/lib/api/ListMockApiHandler";

export class AdvantageMockApiHandler extends ListMockApiHandler<Advantage> implements AdvantageApiHandler {
}