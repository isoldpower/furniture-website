import {LinkData} from "@/shared/ui-toolkit";
import {websiteRoutes} from "@/shared/lib";

export const navigationElements: LinkData[] = [
    {href: websiteRoutes.materials, text: 'Материалы'},
    {href: websiteRoutes.portfolio, text: 'Портфолио'},
    {href: websiteRoutes.about, text: 'О компании'}
];