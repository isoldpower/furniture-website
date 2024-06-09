import {lazy} from "react";

export const AboutLazy = lazy(() => import('./ui/AboutPage'));
export * from './ui/mixins/achievements-grid/AchievementsGrid';