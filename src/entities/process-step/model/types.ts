//TODO: Encode SVG into JSON (replace images hrefs with SVG icons loaded from DB)

export interface ProcessData {
    index: number;
    paragraph: string;
    src: string;
    alt?: string;
}

type ProcessVariant = 'default' | 'primary';

export interface ProcessStepData extends ProcessData {
    variant?: ProcessVariant;
}