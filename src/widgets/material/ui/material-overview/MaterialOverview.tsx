import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialOverview.module.scss';
import {Material, MaterialAdvantages} from "@/entities/material";
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {MaterialAdvantagesFx} from "@/features/material";
import {useGetMaterialAdvantagesQuery} from "@/widgets/material";
import {HomeAdvantage} from "@/entities/advantage";

interface MaterialOverviewProps {
    data?: Material;
}

export const MaterialOverview: FC<MaterialOverviewProps> = ({data}: MaterialOverviewProps) => {
    const {...query} = useGetMaterialAdvantagesQuery(data.id);

    return data ? (
        <div className={`${classes.materialOverview__wrapper}`} id={data.href_postfix.replaceAll('/', '')}>
            <div className={`${classes.materialOverview__content} cc-grid cc-gap-9`}>
                <h2 className={`${classes.materialOverview__heading} cc-heading-3`}>{data.title}</h2>
                <div className={`${classes.materialOverview__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.materialOverview__image} cc-round`} image={data.image}/>
                </div>
                <p className={`${classes.materialOverview__paragraph}`}>{data.paragraph}</p>
                <MaterialAdvantagesFx {...query}>
                    <MaterialAdvantages materials={query?.currentData}>
                        <HomeAdvantage />
                    </MaterialAdvantages>
                </MaterialAdvantagesFx>
                <p className={`${classes.materialOverview__endingParagraph}`}>{data.ending}</p>
            </div>
        </div>) : undefined;
};