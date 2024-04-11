import {ProgressiveImageType} from "@/shared/ui";

export interface Material {
    id: number;
    title: string;
    paragraph: string;
    ending: string;
    href_postfix: string;
    image: ProgressiveImageType;
    important: boolean;
}