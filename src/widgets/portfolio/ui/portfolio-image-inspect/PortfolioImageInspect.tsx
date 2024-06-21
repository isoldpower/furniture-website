import {BaseHTMLAttributes, FC, useCallback} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioImageInspect.module.scss';
import {ProgressiveImage, ProgressiveImageData} from "@/shared/ui-toolkit";
import {closeWindow, selectData, useAppDispatch, useTypedSelector} from "@/app/redux";

interface PortfolioImageInspectProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const PortfolioImageInspect: FC<PortfolioImageInspectProps> = ({className, ...props}: PortfolioImageInspectProps) => {
    const data = useTypedSelector((state) => selectData(state, 'portfolio'));
    const dispatch = useAppDispatch();

    const close = useCallback(() => dispatch(closeWindow('portfolio')), [dispatch]);

    return (
        <div className={`${classes.portfolioImageInspect__wrapper} ${className}`} {...props}>
            <div className={`${classes.portfolioImageInspect__content}`}>
                <div className={`${classes.portfolioImageInspect__back}`} onClick={close} />
                <div className={`${classes.portfolioImageInspect__container}`}>
                    <div className={`${classes.portfolioImageInspect__imageWrapper}`}>
                        <ProgressiveImage className={`${classes.portfolioImageInspect__image}`} image={data as ProgressiveImageData ?? {
                            high: '',
                            low: '',
                            alt: 'undefined'
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};