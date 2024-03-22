export interface Product {
    id: number;
    title: string;
    description: string;
    duration: string;
    cost: string;
    hrefPostfix: string;
    sectionId: number;
}

export interface ProductImage {
    productId: number;
    imageId: number;
}

export interface ProductMaterial {
    productId: number;
    materialId: number;
}