import portfolioJson from './mock/portfolio.json';
import {PortfolioApiHandler} from "@/entities/portfolio/api/PortfolioApiHandler";
import {PortfolioMockApiHandler} from "@/entities/portfolio/api/PortfolioMockApiHandler";

export const portfolioApi: PortfolioApiHandler = new PortfolioMockApiHandler(portfolioJson.portfolioItems);