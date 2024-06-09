import {lazy} from "react";

export const ProductLazy = lazy(() => import('./ui/ProductPage'));
export * from './ui/mixins';