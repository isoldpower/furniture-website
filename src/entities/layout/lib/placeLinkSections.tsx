import classes from "../ui/footer/Footer.module.scss";
import {LinksSection} from "../model";
import {AdaptiveLink, LinkData} from "@/shared/ui";

export const placeSections = (sections: LinksSection[]) => {
    return sections.map((section, key) => (
        <div className={`${classes.footer__navigationSection}`} key={key}>
            <h4 className="cc-fs-300 cc-pb-6">{section.title}</h4>
            <ul className={`${classes.footer__linksList} cc-grid cc-gap-5 cc-fs-100`}>
                {placeSectionLinks(section.links)}
            </ul>
        </div>
    ))
}

export const placeSectionLinks = (links: LinkData[]) => {
    console.log(links);

    return links.map((link, key) => (
        <li className={`${classes.footer__listItem}`} key={key}>
            <AdaptiveLink className={`${classes.footer__listLink}`} to={link.href}>{link.text}</AdaptiveLink>
        </li>
    ))
}