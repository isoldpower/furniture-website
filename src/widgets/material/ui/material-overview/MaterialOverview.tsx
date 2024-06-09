import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialOverview.module.scss';
import {Material} from "@/entities/material";
import {ProgressiveImage} from "@/shared/ui";
import {MaterialOverviewAdvantages} from "./mixins/material-overview-advantages/MaterialOverviewAdvantages";

interface MaterialOverviewProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Material;
}

export const MaterialOverview: FC<MaterialOverviewProps> = ({className, data, ...props}: MaterialOverviewProps) => {
    return (
        <div className={`${classes.materialOverview__wrapper} ${className}`} {...props} id={data.href_postfix.replaceAll('/', '')}>
            <div className={`${classes.materialOverview__content} cc-grid cc-gap-9`}>
                <h2 className={`${classes.materialOverview__heading} cc-heading-3`}>{data.title}</h2>
                <div className={`${classes.materialOverview__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.materialOverview__image} cc-round`} image={data.image}/>
                </div>
                <p className={`${classes.materialOverview__paragraph}`}>{data.paragraph}</p>
                <MaterialOverviewAdvantages materialId={data.id} />
                <p className={`${classes.materialOverview__endingParagraph}`}>{data.ending}</p>
            </div>
        </div>
    );
};