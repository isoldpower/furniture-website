import {ProgressiveImageData} from "@/shared/ui-toolkit";
import {ReactNode} from "react";

export interface SectionPreviewData {
    title: string;
    hrefPostfix: string;
    image: ProgressiveImageData;
}

export interface SectionSpoilerData {
    title: string;
    button: ReactNode;
    sectionLink?: boolean;
}