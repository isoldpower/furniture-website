import {lazy} from "react";

export const MaterialsLazy = lazy(() => import('./ui/MaterialsPage'));
export * from './ui/mixins/materials-loader/MaterialsLoader';