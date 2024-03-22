import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './SideHeader.module.scss';
import {AdaptiveLink, LinkData} from "@/shared/ui";
import {websiteRoutes} from "@/shared/lib";
import {sections} from "@/widgets/catalog-section";
import {SectionHeaderCard} from "@/entities/catalog-section/ui/section-header-card/SectionHeaderCard";

interface SideHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const SideHeader: FC<SideHeaderProps> = ({className, ...props}: SideHeaderProps) => {
    const navigationElements: LinkData[] = [
        {href: websiteRoutes.materials, text: 'Материалы'},
        {href: '/portfolio', text: 'Портфолио'},
        {href: '/about', text: 'О компании'}
    ]
    return (
        <div className={`${classes.sideHeader__wrapper} ${className}`} {...props}>
            <div className={`${classes.sideHeader__back}`} />
            <div className={`${classes.sideHeader__content} cc-pt-1 cc-px-4`}>
                <div className={`${classes.sideHeader__container} cc-border-radius-1 cc-bg-neutral-000 cc-p-9 cc-grid cc-gap-9`}>
                    <div className={`${classes.sideHeader__descriptor}`}>Навигация по сайту</div>
                    <ul className={`${classes.header__navigationList} cc-grid cc-gap-9`}>
                        {navigationElements.map((element, key) => (
                            <li className={`${classes.header__navigationItem}`} key={key}>
                                <AdaptiveLink to={element.href}>{element.text}</AdaptiveLink>
                            </li>
                        ))}
                    </ul>
                    <hr className={`${classes.header__separator}`}/>
                    <div className={`${classes.header__catalogPreview} cc-grid cc-gap-7`}>
                        {sections.slice(0, 4).map((section, key) => (
                            <SectionHeaderCard data={section} key={key} to={websiteRoutes.catalog + section.hrefPostfix} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};