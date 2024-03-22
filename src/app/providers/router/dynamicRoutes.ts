import {products} from "@/widgets/product";
import {sections} from "@/widgets/catalog-section";

export const sectionRoutes: {[route: string]: string} = {};
for (let i = 0; i < sections.length; i++) {
    sectionRoutes[sections[i].hrefPostfix] = sections[i].title;
}

export const itemRoutes: {[name: string]: string} = {};
for (let i = 0; i < products.length; i++) {
    const section = sections.find(section => products[i].sectionId === section.id);
    itemRoutes[section.hrefPostfix + products[i].hrefPostfix] = products[i].title;
}