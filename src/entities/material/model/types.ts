import {ProgressiveImageType} from "@/shared/ui-toolkit";
import {Advantage} from "@/entities/advantage";

export interface Material {
    id: number;
    title: string;
    first_paragraph: string;
    second_paragraph: string;
    href_postfix: string;
    image: ProgressiveImageType;
    important: boolean;
}

export interface MaterialDetail extends Material {
    advantages: Advantage[];
}