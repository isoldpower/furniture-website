import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialOverview.module.scss';
import {Material} from "@/entities/material";
import {ProgressiveImage} from "@/shared/ui";
import {getImage} from "@/shared/api";
import {getAllMaterialAdvantages} from "@/widgets/advantage/api";
import {getAdvantagesIds} from "@/widgets/material/api";
import {HomeAdvantage} from "@/entities/advantage";

interface MaterialOverviewProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Material;
}

export const MaterialOverview: FC<MaterialOverviewProps> = ({className, data, ...props}: MaterialOverviewProps) => {
    return (
        <div className={`${classes.materialOverview__wrapper} ${className}`} {...props} id={data.hrefPostfix.replaceAll('/', '')}>
            <div className={`${classes.materialOverview__content} cc-grid cc-gap-9`}>
                <h2 className={`${classes.materialOverview__heading} cc-heading-3`}>{data.title}</h2>
                <div className={`${classes.materialOverview__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.materialOverview__image} cc-round`} image={getImage(data.imageId)}/>
                </div>
                <p className={`${classes.materialOverview__paragraph}`}>{data.paragraph}</p>
                <div className={`${classes.materialOverview__advantagesWrapper} gap-column-spacing`}>
                    {getAllMaterialAdvantages(getAdvantagesIds(data.id)).map((advantage, key) => (
                        <HomeAdvantage className={`${classes.materialOverview__advantage} cc-flex`} data={{
                            ...advantage,
                            order: ('0' + (key + 1)).slice(-2)
                        }} key={key}/>
                    ))}
                </div>
                <p className={`${classes.materialOverview__endingParagraph}`}>{data.ending}</p>
            </div>
        </div>
    );
};