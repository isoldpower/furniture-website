const API_REQUEST = '/api/v1/'

export const appendRoutes = (first: string, second: string) => {
    if (second.startsWith('/') && first.endsWith('/'))
        return first + second.slice(1)
    else if (!second.startsWith('/') && !first.endsWith('/'))
        return first + '/' + second;

    return first + second;
}

export const getLandingRequest = (postfix: string) => {
    const sectionRequest = appendRoutes(API_REQUEST, 'landing/');
    return appendRoutes(sectionRequest, postfix);
}

export const getCatalogRequest = (postfix: string) => {
    const sectionRequest = appendRoutes(API_REQUEST, 'catalog/');
    return appendRoutes(sectionRequest, postfix);
}