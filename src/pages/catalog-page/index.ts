import {lazy} from "react";

export const CatalogLazy = lazy(() => import('./ui/CatalogPage'));
export * from './ui/mixins/catalog-section-preview/CatalogSectionPreview';