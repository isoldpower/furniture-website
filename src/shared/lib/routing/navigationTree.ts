import {websiteRoutes} from "@/shared/lib";
import {itemRoutes, sectionRoutes} from "@/app/providers/router/dynamicRoutes";

export const getPageByRoute = (route: string) => {
    const staticRoutes: {[route: string]: string} = {
        [websiteRoutes.home]: 'Главная',
        [websiteRoutes.catalog]: 'Каталог',
        [websiteRoutes.materials]: 'Материалы',
        [websiteRoutes.portfolio]: 'Портфолио',
        [websiteRoutes.about]: 'О компании'
    }

    if (route in staticRoutes) return staticRoutes[route];
    else if (isSection(route)) return getSection(route);
    else if (isItem(route)) return getItem(route);

    console.error('Requested path is not in navigationTree dictionary');
}

const isSection = (route: string) => {
    const isContainRoute = route.indexOf(websiteRoutes.catalog + '/') >= 0;
    return isContainRoute && !isItem(route);
}

const getSection = (route: string) => {
    const postfix = route.replace(websiteRoutes.catalog, '');
    return sectionRoutes[postfix] ?? 'error';
}

const isItem = (route: string) => {
    const catalogPrefix = websiteRoutes.catalog + '/';
    if (route.indexOf(catalogPrefix) < 0) return false;

    const noSectionRoute = route.replace(catalogPrefix, '');
    return noSectionRoute.split('/').length === 2;
}

const getItem = (route: string) => {
    const postfix = route.replace(websiteRoutes.catalog, '');
    return itemRoutes[postfix] ?? 'error';
}