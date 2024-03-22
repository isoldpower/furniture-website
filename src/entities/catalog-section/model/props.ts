import {ProgressiveImageData} from "@/shared/ui";
import {ReactNode} from "react";

export interface SectionPreviewData {
    title: string;
    hrefPostfix: string;
    image: ProgressiveImageData;
}

export interface SectionSpoilerData {
    title: string;
    button: ReactNode;
}