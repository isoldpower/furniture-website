import {ProgressiveImageType} from "@/shared/ui-toolkit";

export interface Section {
    id: number;
    title: string;
    paragraph: string;
    href_postfix: string;
    preview_image: ProgressiveImageType;
}