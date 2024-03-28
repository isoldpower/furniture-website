import {sectionApi} from "@/widgets/catalog-section";
import {productsApi} from "@/widgets/product";


export const sectionRoutes: {[route: string]: string} = {};
const sections = sectionApi.getAll();
for (let i = 0; i < sections.length; i++) {
    sectionRoutes[sections[i].hrefPostfix] = sections[i].title;
}

export const itemRoutes: {[name: string]: string} = {};
for (const product of productsApi.getAll()) {
    const section = sectionApi.getById(product.sectionId);
    itemRoutes[section.hrefPostfix + product.hrefPostfix] = product.title;
}