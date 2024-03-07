export const websiteRoutes = {
    home: '/',
    catalog: '/catalog',
}

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