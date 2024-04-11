import {ReactNode} from "react";
import {ProgressiveImageData} from "@/shared/ui";

export interface HomeMaterialData {
    title: string;
    paragraph: string;
    image: ProgressiveImageData;
    button: ReactNode;
}