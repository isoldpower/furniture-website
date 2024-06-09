import {lazy} from "react";

export const PortfolioLazy = lazy(() => import('./ui/PortfolioPage'));
export * from './ui/mixins/portfolio-loader/PortfolioLoader';