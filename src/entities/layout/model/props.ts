import {ReactNode} from "react";
import {LinkData} from "@/shared/ui";

export interface FooterData {
    sections: ReactNode[];
    socials: SocialLink[];
}

interface SocialLink {
    icon: ReactNode;
    href: string;
}

export interface LinksSection {
    title: string;
    links: LinkData[];
}


export interface CallbackFormData {
    fields: ReactNode[];
    softText: ReactNode;
    sendButton: ReactNode;
}