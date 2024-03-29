import {PortfolioItemData} from "@/entities/portfolio";
import {ListMockApiHandler} from "@/shared/lib/api/ListMockApiHandler";
import {PortfolioApiHandler} from "@/entities/portfolio/api/PortfolioApiHandler";

export class PortfolioMockApiHandler extends ListMockApiHandler<PortfolioItemData> implements PortfolioApiHandler{
}