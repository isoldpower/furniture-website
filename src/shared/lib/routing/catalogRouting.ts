import {websiteRoutes} from "@/shared/lib";

export const sectionByPostfix = (postfix: string) => {
    return websiteRoutes.catalog + postfix;
}