import {PortfolioItemData} from "@/entities/portfolio";
import {ListMockApiHandler} from "@/shared/api/global/ListMockApiHandler";
import {PortfolioApiHandler} from "@/entities/portfolio/api/PortfolioApiHandler";

export class PortfolioMockApiHandler extends ListMockApiHandler<PortfolioItemData> implements PortfolioApiHandler{
}