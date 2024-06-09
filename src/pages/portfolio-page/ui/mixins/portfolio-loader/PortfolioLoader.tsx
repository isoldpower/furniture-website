import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioLoader.module.scss';
import {InspectImage} from "@/features/product";
import {PortfolioItem} from "@/entities/portfolio";
import {PortfolioGrid, useGetPortfolioQuery} from "@/widgets/portfolio";

interface PortfolioLoaderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const PortfolioLoader: FC<PortfolioLoaderProps> = () => {
    const {currentData : portfolio, isLoading, isError} = useGetPortfolioQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    return (
        <PortfolioGrid className={`${classes.portfolioPage__grid}`}>
             {portfolio.map((item, key) => (
                 <InspectImage className="cc-flex cc-width-1of1" data={item.image} key={key}>
                     <PortfolioItem className="cc-flex cc-width-1of1" data={item.image} />
                 </InspectImage>
             ))}
        </PortfolioGrid>
    );
};