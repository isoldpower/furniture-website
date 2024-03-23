import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './SectionHeaderCard.module.scss';
import {Section} from "@/entities/catalog-section";
import {AdaptiveLink, MoreLink, ProgressiveImage} from "@/shared/ui";
import {getImage} from "@/shared/api";
import {Reference} from "@/shared/icons";
import {websiteRoutes} from "@/shared/lib";

interface SectionHeaderCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Section;
}

export const SectionHeaderCard: FC<SectionHeaderCardProps> = ({className, data, ...props}: SectionHeaderCardProps) => {
    const href = websiteRoutes.catalog + data.hrefPostfix;

    return (
        <div className={`${classes.sectionHeaderCard__wrapper} ${className}`} {...props}>
            <div className={`${classes.sectionHeaderCard__content} cc-grid cc-gap-4 cc-laptop-gap-8`}>
                <AdaptiveLink className={`${classes.sectionHeaderCard__overlapLink}`} to={href} />
                <div className={`${classes.sectionHeaderCard__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.sectionHeaderCard__image}`} image={getImage(data.previewImageId)}/>
                </div>
                <div className={`${classes.sectionHeaderCard__headingWrapper} cc-grid cc-gap-8`}>
                    <h2 className={`${classes.sectionHeaderCard__heading} cc-clr-neutral-000`}>{data.title}</h2>
                    <p className={`${classes.sectionHeaderCard__paragraph}`}>{data.paragraph}</p>
                    <div className={`${classes.sectionHeaderCard__buttonWrapper}`}>
                        <MoreLink className={`${classes.sectionHeaderCard__button}`} to={href}>Перейти</MoreLink>
                    </div>
                </div>
                <div className={`${classes.sectionHeaderCard__hint}`}>
                    <div className={`${classes.sectionHeaderCard__circleBack} cc-flex cc-align-items-center cc-justify-content-center cc-round cc-p-2 cc-bg-neutral-000`}>
                        <Reference height={8} width={8}/>
                    </div>
                </div>
            </div>
        </div>
    );
};