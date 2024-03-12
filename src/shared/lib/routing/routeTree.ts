import {websiteRoutes} from "@/shared/lib";

export const nameByRoute = (route: string) => {
    switch (route) {
        case websiteRoutes.home:
            return 'Главная';
        case websiteRoutes.catalog:
            return 'Каталог';
        default:
            throw new Error('Executing route that is not defined');
    }
}