import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioItem.module.scss';
import {Inspect} from "@/shared/icons";
import {ProgressiveImage, ProgressiveImageData} from "@/shared/ui-toolkit";

type PortfolioItemProps = {
    data?: ProgressiveImageData;
}

export const PortfolioItem: FC<PortfolioItemProps> = ({data}: PortfolioItemProps) => {
    return data ? (
        <div className={`${classes.portfolioItem__wrapper}`}>
            <div className={`${classes.portfolioItem__content} cc-flex cc-width-1of1`}>
                <ProgressiveImage className={`${classes.portfolioItem__image}`} image={data} />
                <div className={`${classes.portfolioItem__hover}`}>
                    <Inspect className={`${classes.portfolioItem__hint}`} />
                </div>
            </div>
        </div>
    ) : undefined;
};