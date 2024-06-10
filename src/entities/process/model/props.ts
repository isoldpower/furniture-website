import {ProgressiveImageData} from "@/shared/ui-toolkit";

type ProcessVariant = 'default' | 'primary';

export interface ProcessDisplayData {
    order: string;
    paragraph: string;
    image: ProgressiveImageData;
    variant?: ProcessVariant;
}