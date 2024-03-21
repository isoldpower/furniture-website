import {ReactNode} from "react";
import {LinkData} from "@/shared/ui";

export interface FooterData {
    sections: ReactNode[];
    links: SocialsLink[];
}

export interface LinksSection {
    title: string;
    links: LinkData[];
}

interface SocialsLink {
    icon: ReactNode;
    href: string;
}

export interface CallbackFormData {
    fields: ReactNode[];
    softText: ReactNode;
    sendButton: ReactNode;
}