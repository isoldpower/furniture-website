import {websiteRoutes} from "@/shared/lib";
import {useItemRoutes, useSectionRoutes} from "@/app/providers/router/useDynamicRoutes";
import {useCallback, useEffect, useRef} from "react";

export const useNavigationTree = () => {
    const sectionRoutes = useSectionRoutes();
    const productRoutes = useItemRoutes();
    const staticRoutes = useRef<{[route: string]: string}>({});

    useEffect(() => {
        staticRoutes.current[websiteRoutes.home] = 'Главная';
        staticRoutes.current[websiteRoutes.catalog] = 'Каталог';
        staticRoutes.current[websiteRoutes.materials] = 'Материалы';
        staticRoutes.current[websiteRoutes.portfolio] = 'Портфолио';
        staticRoutes.current[websiteRoutes.about] = 'О компании';
        staticRoutes.current[websiteRoutes.policy] = 'Политика конфиденциальности';
        staticRoutes.current[websiteRoutes.agreement] = 'Договор оферты';
    }, []);

    const isItem = useCallback((route: string) => {
        const catalogPrefix = websiteRoutes.catalog + '/';
        if (route.indexOf(catalogPrefix) < 0) return false;

        const noSectionRoute = route.replace(catalogPrefix, '');
        return noSectionRoute.split('/').length === 2;
    }, [])

    const getItem = useCallback((route: string) => {
        const postfix = route.replace(websiteRoutes.catalog, '');
        return productRoutes[postfix] ?? 'item error';
    }, [productRoutes])

    const isSection = useCallback((route: string) => {
        const isContainRoute = route.indexOf(websiteRoutes.catalog + '/') >= 0;
        return isContainRoute && !isItem(route);
    }, [isItem])

    const getSection = useCallback((route: string) => {
        const postfix = route.replace(websiteRoutes.catalog, '');
        return sectionRoutes[postfix] ?? 'section error';
    }, [sectionRoutes])

    const getPageName = useCallback((route: string) => {
        if (route in staticRoutes.current) return staticRoutes.current[route];
        else if (isSection(route)) return getSection(route);
        else if (isItem(route)) return getItem(route);
        return 'loading';
    }, [getItem, getSection, isItem, isSection, staticRoutes]);

    return {getPageName}
}