import {sectionApi} from "@/widgets/catalog-section";
import {productsApi} from "@/widgets/product";


export const sectionRoutes: {[route: string]: string} = {};
sectionApi.getAll().then(sections => {
    for (const section of sections) {
        sectionRoutes[section.href_postfix] = section.title;
    }
});

export const itemRoutes: {[name: string]: string} = {};
productsApi.getAll().then(products => {
    for (const product of products) {
        const section = product.section;
        itemRoutes[section.href_postfix + product.href_postfix] = product.title;
    }
});