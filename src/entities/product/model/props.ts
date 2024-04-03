import {ReactNode} from "react";
import {Material} from "@/entities/material";

export interface ProductCardData {
    id: number;
    title: string;
    materials: Material[];
    href: string;
    displayImages: ReactNode;
}