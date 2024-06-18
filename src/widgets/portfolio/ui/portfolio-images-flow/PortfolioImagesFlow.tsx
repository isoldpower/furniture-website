import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioImagesFlow.module.scss';
import {PortfolioFx, PortfolioGrid} from "@/features/portfolio";
import {useGetPortfolioQuery} from "@/widgets/portfolio";
import {InspectImage} from "@/features/product";
import {PortfolioItem} from "@/entities/portfolio";

interface PortfolioImagesFlowProps {
}

export const PortfolioImagesFlow: FC<PortfolioImagesFlowProps> = () => {
    const {...query} = useGetPortfolioQuery();

    return (
        <PortfolioFx {...query}>
            <PortfolioGrid className={`${classes.portfolioPage__grid}`}>
                {query?.currentData?.map((item, key) => (
                    <InspectImage className="cc-flex cc-width-1of1" data={item.image} key={key}>
                        <PortfolioItem className="cc-flex cc-width-1of1" data={item.image} />
                    </InspectImage>
                ))}
            </PortfolioGrid>
        </PortfolioFx>
    );
};