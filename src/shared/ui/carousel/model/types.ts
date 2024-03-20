import {ReactNode} from "react";

export interface CarouselData {
    indicators?: boolean;
    vertical?: boolean;
    title: ReactNode;
    button: ReactNode;
    leftArrow?: ReactNode;
    rightArrow?: ReactNode;
}

export interface Range {
    firstIncluded: number;
    lastIncluded: number;
}