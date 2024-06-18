import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './SideHeader.module.scss';
import {AdaptiveLink, FullscreenModal, LinkData} from "@/shared/ui-toolkit";
import {websiteRoutes} from "@/shared/lib";
import {SideHeaderSectionsFx} from "@/features/navigation";
import {SectionHeaderCard} from "@/entities/catalog-section";
import {SideHeaderSections} from "@/entities/navigation";
import {useGetAllSectionsQuery} from "@/features/catalog-section";

interface SideHeaderProps {
}

export const SideHeader: FC<SideHeaderProps> = () => {
    const navigationElements: LinkData[] = [
        {href: websiteRoutes.materials, text: 'Материалы'},
        {href: websiteRoutes.portfolio, text: 'Портфолио'},
        {href: websiteRoutes.about, text: 'О компании'}
    ];

    const {...query} = useGetAllSectionsQuery();

    return (
        <FullscreenModal className={classes.sideHeader__containerAppear}>
            <div className={`${classes.sideHeader__container} cc-p-9 cc-flex cc-flex-col cc-gap-9`}>
                <div className={`${classes.sideHeader__descriptor}`}>Навигация по сайту</div>
                <ul className={`${classes.header__navigationList} cc-grid cc-gap-9`}>
                    {navigationElements.map((element, key) => (
                        <li className={`${classes.header__navigationItem}`} key={key}>
                            <AdaptiveLink to={element.href}>{element.text}</AdaptiveLink>
                        </li>
                    ))}
                </ul>
                <hr className={`${classes.header__separator}`}/>
                <SideHeaderSectionsFx {...query}>
                    <SideHeaderSections sections={query?.currentData}>
                        <SectionHeaderCard/>
                    </SideHeaderSections>
                </SideHeaderSectionsFx>
            </div>
        </FullscreenModal>
    );
};