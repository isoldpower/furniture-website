import {ReactNode} from "react";

export interface FooterData {
    sections: ReactNode[];
    links: SocialsLink[];
}

interface SocialsLink {
    icon: ReactNode;
    href: string;
}