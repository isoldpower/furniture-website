import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './SectionHeaderCard.module.scss';
import {Section} from "@/entities/catalog-section";
import {AdaptiveLink, MoreLink, ProgressiveImage} from "@/shared/ui-toolkit";
import {Reference} from "@/shared/icons";
import {websiteRoutes} from "@/shared/lib";

type SectionHeaderCardProps = {
    data?: Section;
}

export const SectionHeaderCard: FC<SectionHeaderCardProps> = ({data}: SectionHeaderCardProps) => {
    const href = websiteRoutes.catalog + data?.href_postfix;
    const linkTitle = 'Перейти в ' + data?.title;

    return data ? (
        <div className={`${classes.sectionHeaderCard__wrapper} cc-flex`}>
            <div className={`${classes.sectionHeaderCard__content} cc-flex cc-width-1of1 cc-flex-col cc-gap-4 cc-laptop-gap-8`}>
                <AdaptiveLink className={`${classes.sectionHeaderCard__overlapLink}`} title={linkTitle} to={href}/>
                <a className={`${classes.sectionHeaderCard__imageWrapper}`} href={href} title={linkTitle}>
                    <ProgressiveImage className={`${classes.sectionHeaderCard__image}`} image={data?.preview_image}/>
                </a>
                <div className={`${classes.sectionHeaderCard__headingWrapper} cc-grid cc-gap-8`}>
                    <a href={href} title={linkTitle}>
                        <h2 className={`${classes.sectionHeaderCard__heading} cc-clr-neutral-000`}>{data?.title}</h2>
                    </a>
                    <p className={`${classes.sectionHeaderCard__paragraph}`}>{data?.paragraph}</p>
                    <div className={`${classes.sectionHeaderCard__buttonWrapper}`}>
                        <MoreLink className={`${classes.sectionHeaderCard__button}`} title={linkTitle} to={href}>Перейти</MoreLink>
                    </div>
                </div>
                <div className={`${classes.sectionHeaderCard__hint}`}>
                    <div className={`${classes.sectionHeaderCard__circleBack} cc-flex cc-align-items-center cc-justify-content-center cc-round cc-p-2 cc-bg-neutral-000`}>
                        <Reference height={8} width={8}/>
                    </div>
                </div>
            </div>
        </div>
    ) : undefined;
};