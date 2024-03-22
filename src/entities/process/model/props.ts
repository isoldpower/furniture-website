import {ProgressiveImageData} from "@/shared/ui";

type ProcessVariant = 'default' | 'primary';

export interface ProcessDisplayData {
    order: string;
    paragraph: string;
    img: ProgressiveImageData;
    variant?: ProcessVariant;
}