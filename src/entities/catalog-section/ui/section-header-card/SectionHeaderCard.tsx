import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './SectionHeaderCard.module.scss';
import {Section} from "@/entities/catalog-section";
import {ProgressiveImage} from "@/shared/ui";
import {getImage} from "@/shared/api";
import {Reference} from "@/shared/icons";
import {Link, LinkProps} from "react-router-dom";

interface SectionHeaderCardProps extends LinkProps {
    data: Section;
}

export const SectionHeaderCard: FC<SectionHeaderCardProps> = ({className, data, ...props}: SectionHeaderCardProps) => {
    return (
        <Link className={`${classes.sectionHeaderCard__wrapper} ${className}`} {...props}>
            <div className={`${classes.sectionHeaderCard__content} cc-grid cc-gap-4 cc-laptop-gap-9`}>
                <div className={`${classes.sectionHeaderCard__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.sectionHeaderCard__image}`} image={getImage(data.previewImageId)}/>
                </div>
                <div className={`${classes.sectionHeaderCard__headingWrapper}`}>
                    <h2 className={`${classes.sectionHeaderCard__heading} cc-clr-neutral-000`}>{data.title}</h2>
                </div>
                <div className={`${classes.sectionHeaderCard__hint}`}>
                    <div className={`${classes.sectionHeaderCard__circleBack} cc-flex cc-align-items-center cc-justify-content-center cc-round cc-p-2 cc-bg-neutral-000`}>
                        <Reference height={8} width={8}/>
                    </div>
                </div>
            </div>
        </Link>
    );
};