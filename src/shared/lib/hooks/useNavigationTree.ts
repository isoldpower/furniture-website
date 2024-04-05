import {websiteRoutes} from "@/shared/lib";
import {useItemRoutes, useSectionRoutes} from "@/app/providers/router/useDynamicRoutes";
import {useEffect, useState} from "react";

export const useNavigationTree = (route: string) => {
    const sectionRoutes = useSectionRoutes();
    const productRoutes = useItemRoutes();
    const staticRoutes: {[route: string]: string} = {
        [websiteRoutes.home]: 'Главная',
        [websiteRoutes.catalog]: 'Каталог',
        [websiteRoutes.materials]: 'Материалы',
        [websiteRoutes.portfolio]: 'Портфолио',
        [websiteRoutes.about]: 'О компании',
        [websiteRoutes.policy]: 'Политика конфиденциальности',
        [websiteRoutes.agreement]: 'Договор оферты'
    }

    const [pageName, setPageName] = useState<string>();

    useEffect(() => {
        if (route in staticRoutes) setPageName(staticRoutes[route]);
        else if (isSection(route)) setPageName(getSection(route));
        else if (isItem(route)) setPageName(getItem(route));
        else console.error('Requested path is not presented in navigationTree dictionary');
    }, [route, staticRoutes, productRoutes]);

    const isSection = (route: string) => {
        const isContainRoute = route.indexOf(websiteRoutes.catalog + '/') >= 0;
        return isContainRoute && !isItem(route);
    }

    const getSection = (route: string) => {
        const postfix = route.replace(websiteRoutes.catalog, '');
        return sectionRoutes[postfix] ?? 'section error';
    }

    const isItem = (route: string) => {
        const catalogPrefix = websiteRoutes.catalog + '/';
        if (route.indexOf(catalogPrefix) < 0) return false;

        const noSectionRoute = route.replace(catalogPrefix, '');
        return noSectionRoute.split('/').length === 2;
    }

    const getItem = (route: string) => {
        const postfix = route.replace(websiteRoutes.catalog, '');
        return productRoutes[postfix] ?? 'item error';
    }

    return {pageName}
}