import {LinkData} from "@/shared/ui";
import {websiteRoutes} from "@/shared/lib";

interface FooterSection {
    title: string;
    links: LinkData[];
}

export const sections: FooterSection[] = [
    {
        title: "CozyCraft",
        links: [
            {
                text: "Главная",
                href: websiteRoutes.home
            },
            {
                text: "Каталог",
                href: websiteRoutes.catalog
            },
            {
                text: "Преимущества",
                href: websiteRoutes.homeAdvantages,
                offset: true
            },
            {
                text: "Этапы работы",
                href: websiteRoutes.homeProcess,
                offset: true
            },
            {
                text: "Материалы",
                href: websiteRoutes.materials
            }
        ]
    }
]