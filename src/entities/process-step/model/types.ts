//TODO: Encode SVG into JSON (replace images hrefs with SVG icons loaded from DB)

export interface ProcessData {
    id: number;
    paragraph: string;
    imgSrc: string;
    alt?: string;
}

type ProcessVariant = 'default' | 'primary';

export interface ProcessDisplayData {
    order: string;
    paragraph: string;
    imgSrc: string;
    alt?: string;
    variant?: ProcessVariant;
}