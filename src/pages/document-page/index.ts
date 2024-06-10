import {lazy} from "react";

export const DocumentLazy = lazy(() => import('./DocumentPage'));
export {documents} from './assets';