import {ProgressiveImageType} from "@/shared/ui";

export interface Section {
    id: number;
    title: string;
    paragraph: string;
    href_postfix: string;
    preview_image: ProgressiveImageType;
}