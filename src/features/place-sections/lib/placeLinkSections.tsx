import {LinkData} from "@/shared/ui/link/model";
import classes from "@/entities/footer/ui/Footer.module.scss";
import {AdaptiveLink} from "@/shared/ui/link/ui/AdaptiveLink";
import {LinksSection} from "@/features/place-sections/model";

export const placeSections = (sections: LinksSection[]) => {
    return sections.map((section, key) => (
        <div className={`${classes.footer__navigationSection}`} key={key}>
            <h4 className={`cc-fs-300 cc-pb-6`}>{section.title}</h4>
            <ul className={`${classes.footer__linksList} cc-grid cc-gap-5 cc-fs-100`}>
                {placeSectionLinks(section.links)}
            </ul>
        </div>
    ))
}

export const placeSectionLinks = (links: LinkData[]) => {
    return links.map((link, key) => (
        <li className={`${classes.footer__listItem}`} key={key}>
            <AdaptiveLink className={`${classes.footer__listLink}`} to={link.href}>{link.text}</AdaptiveLink>
        </li>
    ))
}