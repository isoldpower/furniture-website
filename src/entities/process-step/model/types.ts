type ProcessVariant = 'default' | 'primary';

export interface ProcessData {
    id: number;
    paragraph: string;
    imgSrc: string;
    alt?: string;
}

export interface ProcessDisplayData {
    order: string;
    paragraph: string;
    imgSrc: string;
    alt?: string;
    variant?: ProcessVariant;
}