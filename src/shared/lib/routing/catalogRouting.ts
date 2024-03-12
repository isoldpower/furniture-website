import {websiteRoutes} from "@/shared/lib";

export const sectionByPostfix = (postfix: string) => {
    return websiteRoutes.catalog + postfix;
}

export const pageByPostfix = (sectionPostfix: string, postfix: string) => {
    return websiteRoutes.catalog + sectionPostfix + postfix;
}