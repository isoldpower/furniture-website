import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {ProgressiveImage} from "@/shared/ui";
import {SectionPreviewData} from "../../model";
import {Reference} from "@/shared/icons";

interface CatalogSectionProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: SectionPreviewData;
}

export const CatalogSection: FC<CatalogSectionProps> = ({className, data, ...props}: CatalogSectionProps) => {
    return (
        <div className={`${classes.catalogSection__wrapper} ${className}`} {...props}>
            <div className={`${classes.catalogSection__content}`}>
                <div className={`${classes.catalogSection__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.catalogSection__image}`} image={data.image} />
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
    );
};