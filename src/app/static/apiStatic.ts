export const API_HOST_WITH_PREFIX = 'http://localhost:8000/api/v1/';
export const CATALOGUE_API_POSTFIX = '/catalogue';
export const FEEDBACK_API_POSTFIX = '/feedback';
export const PORTFOLIO_API_POSTFIX = '/portfolio';
export const SETTINGS_API_POSTFIX = '/settings';
export const PARTIALS_API_POSTFIX = '/partials';

export const apiRoutes = {
    [CATALOGUE_API_POSTFIX]: {
        sections: `${CATALOGUE_API_POSTFIX}/sections/`,
        sectionDetails: (id: number) => `${CATALOGUE_API_POSTFIX}/sections/${id}/`,
        materials: `${CATALOGUE_API_POSTFIX}/materials/`,
        materialDetails: (id: number) => `${CATALOGUE_API_POSTFIX}/materials/${id}/`,
        products: `${CATALOGUE_API_POSTFIX}/products/`,
        productDetails: (id: number) => `${CATALOGUE_API_POSTFIX}/products/${id}/`,
    },
    [FEEDBACK_API_POSTFIX]: {
        phoneCall: `${FEEDBACK_API_POSTFIX}/phone-call/`,
    },
    [PORTFOLIO_API_POSTFIX]: {
        portfolio: `${PORTFOLIO_API_POSTFIX}/`,
    },
    [SETTINGS_API_POSTFIX]: {
        settings: `${SETTINGS_API_POSTFIX}/`
    },
    [PARTIALS_API_POSTFIX]: {
        advantages: `${PARTIALS_API_POSTFIX}/advantages/`,
        advantageDetail: (id: number) => `${PARTIALS_API_POSTFIX}/advantages/${id}/`,
        images: `${PARTIALS_API_POSTFIX}/images/`,
        imageDetail: (id: number) => `${PARTIALS_API_POSTFIX}/images/${id}/`,
        process: `${PARTIALS_API_POSTFIX}/process/`,
        processDetail: (id: number) => `${PARTIALS_API_POSTFIX}/process/${id}/`,
    }
}