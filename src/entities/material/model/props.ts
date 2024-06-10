import {ReactNode} from "react";
import {ProgressiveImageData} from "@/shared/ui-toolkit";

export interface HomeMaterialData {
    title: string;
    paragraph: string;
    image: ProgressiveImageData;
    button: ReactNode;
}