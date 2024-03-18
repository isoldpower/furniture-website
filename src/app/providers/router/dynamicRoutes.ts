import {products} from "@/shared/api";

export const sectionRoutes: {[route: string]: string} = {};
for (let i = 0; i < products.length; i++) {
    sectionRoutes[products[i].hrefPostfix] = products[i].title;
}

export const itemRoutes: {[name: string]: string} = {};
for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length; j++) {
        itemRoutes[products[i].hrefPostfix + products[i].products[j].postfix] = products[i].products[j].title;
    }
}