import {ProgressiveImageData} from "@/shared/ui-toolkit";
import {Dispatch, SetStateAction} from "react";

export interface ImagesHoverData {
    images: ProgressiveImageData[];
}

export interface ImageBarData {
    active: number;
    amount: number;
}

export interface ImageAreasData {
    setActive: Dispatch<SetStateAction<number>>;
    amount: number;
}