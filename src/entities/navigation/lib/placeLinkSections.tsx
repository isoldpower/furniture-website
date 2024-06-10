import classes from "../ui/footer/Footer.module.scss";
import {LinksSection} from "../model";
import {AdaptiveLink, LinkData} from "@/shared/ui-toolkit";
import {websiteRoutes} from "@/shared/lib";
import {useEffect, useState} from "react";
import {useSectionRoutes} from "@/app/providers/router/useDynamicRoutes";

export const useLinkSections = (sections: LinksSection[]) => {
    const [sectionsState, setSectionsState] = useState<LinksSection[]>(sections);
    const sectionRoutes = useSectionRoutes();

    useEffect(() => {
        setSectionsState(() => sections.concat({
            title: 'Каталог',
            links: Object.entries(sectionRoutes).map(([key, value]) => ({
                text: value,
                href: websiteRoutes.catalog + key
            }))
        }))
    }, [sections, sectionRoutes]);

    return sectionsState.map((section, key) => (
        <div className={`${classes.footer__navigationSection}`} key={key}>
            <h4 className="cc-fs-300 cc-pb-6">{section.title}</h4>
            <ul className={`${classes.footer__linksList} cc-grid cc-gap-5 cc-fs-100`}>
                {placeSectionLinks(section.links)}
            </ul>
        </div>
    ));
}

export const placeSectionLinks = (links: LinkData[]) => {
    return links.map((link, key) => (
        <li className={`${classes.footer__listItem}`} key={key}>
            <AdaptiveLink className={`${classes.footer__listLink}`} to={link.href}>{link.text}</AdaptiveLink>
        </li>
    ))
}