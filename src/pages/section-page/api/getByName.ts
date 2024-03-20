import {products} from "@/shared/api";

export const getByName = (name: string) => {
    const postfix = '/' + name;
    return products.find((section) => section.hrefPostfix === postfix);
}