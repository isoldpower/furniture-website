import {ReactNode} from "react";

export interface CarouselData {
    title: ReactNode;
    button: ReactNode;
}

export interface Range {
    firstIncluded: number;
    lastIncluded: number;
}