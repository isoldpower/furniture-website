import {ReactNode} from "react";

export interface MaterialData {
    src: string;
    title: string;
    paragraph: string;
    hrefPostfix: string;
}

export interface MaterialDisplayData {
    title: string;
    paragraph: string;
    src: string;
    button: ReactNode;
}