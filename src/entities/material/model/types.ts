export interface Material {
    id: number;
    title: string;
    paragraph: string;
    ending: string;
    hrefPostfix: string;
    imageId: number;
}

export interface MaterialAdvantage {
    materialId: number;
    advantageId: number;
}