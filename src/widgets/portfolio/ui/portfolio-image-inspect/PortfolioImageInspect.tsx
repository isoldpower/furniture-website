import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './PortfolioImageInspect.module.scss';
import {ProgressiveImage, ProgressiveImageData} from "@/shared/ui-toolkit";
import {closeWindow, useAppDispatch, useTypedSelector} from "@/app/redux";
import {selectData} from "@/app/redux/features/modal/modalSlice";

interface PortfolioImageInspectProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const PortfolioImageInspect: FC<PortfolioImageInspectProps> = ({className, ...props}: PortfolioImageInspectProps) => {
    const data = useTypedSelector((state) => selectData(state, 'portfolio'));
    const dispatch = useAppDispatch();

    const close = () => {
        dispatch(closeWindow('portfolio'));
    }

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