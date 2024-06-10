import {ReactNode} from "react";
import {LinkData} from "@/shared/ui-toolkit";

export interface FooterData {
    sections: ReactNode[];
    basement: ReactNode;
    header: ReactNode;
}

export interface ContactsData {
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