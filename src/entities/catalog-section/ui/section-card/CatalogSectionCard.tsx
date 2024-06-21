import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSectionCard.module.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {Reference} from "@/shared/icons";
import {Section} from "@/entities/catalog-section";

type CatalogSectionCardProps = {
    data?: Section;
}

export const CatalogSectionCard: FC<CatalogSectionCardProps> = ({data}: CatalogSectionCardProps) => {
    return data ? (
        <div className={`${classes.catalogSection__wrapper}`}>
            <div className={`${classes.catalogSection__content}`}>
                <div className={`${classes.catalogSection__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.catalogSection__image}`} image={data.preview_image} />
                </div>
                <div className={`${classes.catalogSection__headingWrapper}`}>
                    <h2 className={`${classes.catalogSection__heading} cc-heading-3 cc-clr-neutral-000`}>{data.title}</h2>
                </div>
                <div className={`${classes.catalogSection__hint}`}>
                    <div className={`${classes.catalogSection__circleBack} cc-round cc-p-5 cc-bg-neutral-000`}>
                        <Reference height={24} width={24} />
                    </div>
                </div>
            </div>
        </div>
    ) : undefined;
};