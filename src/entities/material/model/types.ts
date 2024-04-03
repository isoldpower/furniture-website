import {ProgressiveImageType} from "@/shared/ui";
import {Advantage} from "@/entities/advantage";

export interface Material {
    id: number;
    title: string;
    paragraph: string;
    ending: string;
    href_postfix: string;
    image: ProgressiveImageType;
}

export interface MaterialDetail extends Material {
    advantages: Advantage[];
}