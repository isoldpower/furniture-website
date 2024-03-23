import {LinkData} from "@/shared/ui";
import {websiteRoutes} from "@/shared/lib";
import {sectionRoutes} from "@/app/providers/router/dynamicRoutes";

interface FooterSection {
    title: string;
    links: LinkData[];
}

const getSections = (): LinkData[] => {
    return Object.entries(sectionRoutes).map(([key, value]) => ({
      text: value,
      href: websiteRoutes.catalog + key
    }))
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
    },
    {
        title: "Каталог",
        links: getSections()
    }
]