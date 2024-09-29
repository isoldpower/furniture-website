import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialOverview.module.scss';
import {Material, MaterialAdvantages} from "@/entities/material";
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {MaterialAdvantagesFx} from "@/features/material";
import {HomeAdvantage} from "@/entities/advantage";
import {useGetMaterialQuery} from "@/widgets/material";

interface MaterialOverviewProps {
    data?: Material;
}

export const MaterialOverview: FC<MaterialOverviewProps> = ({data}: MaterialOverviewProps) => {
    const {...query} = useGetMaterialQuery(data.id);

    return data ? (
        <div className={`${classes.materialOverview__wrapper}`} id={data.href_postfix.replaceAll('/', '')}>
            <div className={`${classes.materialOverview__content} cc-grid cc-gap-9`}>
                <h2 className={`${classes.materialOverview__heading} cc-heading-3`}>{data.title}</h2>
                <div className={`${classes.materialOverview__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.materialOverview__image} cc-round`} image={data.image}/>
                </div>
                <p className={`${classes.materialOverview__paragraph}`}>{data.first_paragraph}</p>
                <MaterialAdvantagesFx isError={query.isError} isLoading={query.isLoading}>
                    <MaterialAdvantages advantages={query.currentData?.advantages}>
                        <HomeAdvantage />
                    </MaterialAdvantages>
                </MaterialAdvantagesFx>
                <p className={`${classes.materialOverview__endingParagraph}`}>{data.second_paragraph}</p>
            </div>
        </div>) : undefined;
};