import {ReactNode} from "react";
import {LinkData} from "@/shared/ui-toolkit";

export interface SocialLink {
    icon: ReactNode;
    href: string;
}

export interface LinksSection {
    title: string;
    links: LinkData[];
}