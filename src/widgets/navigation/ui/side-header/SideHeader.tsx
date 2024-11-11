import {FC, useMemo} from "react";
import '@/app/scss/main.scss';
import classes from './SideHeader.module.scss';
import {AdaptiveLink, FullscreenModal, List} from "@/shared/ui-toolkit";
import {SideHeaderSectionsFx} from "@/features/navigation";
import {SectionHeaderCard} from "@/entities/catalog-section";
import {SideHeaderSections} from "@/entities/navigation";
import {navigationElements} from "../../config";
import {useGetAllSectionsQuery} from "@/widgets/catalog-section";

interface SideHeaderProps {
}

export const SideHeader: FC<SideHeaderProps> = () => {
    const {...query} = useGetAllSectionsQuery();
    const displayedSections = useMemo(() => {
        return query?.currentData
            ?.filter((section) => section.visible_in_header)
            ?.slice(0, 4);
    }, [query.currentData]);

    return (
        <FullscreenModal className={classes.sideHeader__containerAppear}>
            <div className={`${classes.sideHeader__container} cc-p-9 cc-flex cc-flex-col cc-gap-9`}>
                <div className={`${classes.sideHeader__descriptor}`}>Навигация по сайту</div>
                <List className={`${classes.header__navigationList} cc-grid cc-gap-9`}>
                    {navigationElements.map((element, key) => (
                        <AdaptiveLink className={`${classes.header__navigationItem}`} key={key} to={element.href}>
                            {element.text}
                        </AdaptiveLink>
                    ))}
                </List>
                <hr className={`${classes.header__separator}`}/>
                <SideHeaderSectionsFx {...query}>
                    <SideHeaderSections sections={displayedSections}>
                        <SectionHeaderCard/>
                    </SideHeaderSections>
                </SideHeaderSectionsFx>
            </div>
        </FullscreenModal>
    );
};