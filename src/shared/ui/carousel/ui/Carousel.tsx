import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Carousel.module.scss';
import {ArrowLeft, ArrowRight} from "@/shared/icons";
import {CarouselData, useCarousel} from "../model";
import {placeIndicators} from "@/shared/ui/carousel/lib";

interface CarouselProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: CarouselData;
    children: ReactNode[];
    id: string;
}

export const Carousel: FC<CarouselProps> = ({className, children, data, ...props}: CarouselProps) => {
    const GROUP_ID = `carousel-${props.id}`;
    const carousel = useCarousel(children, GROUP_ID);
    const inActiveRange = (number: number): boolean =>
        number >= carousel.currentRange.firstIncluded && number <= carousel.currentRange.lastIncluded;

    return (
        <div className={`${classes.carousel__wrapper} ${className} cc-main-gutter cc-py-1`} {...props}>
            <div className={`${classes.carousel__content} cc-main-gutter-content`}>
                <div className={`${classes.carousel__headWrapper} cc-flex cc-justify-content-space cc-align-items-center cc-pb-7`}>
                    {data.title}
                    <div className={`${classes.carousel__controls} cc-flex cc-gap-2`}>
                        <button aria-disabled={carousel.currentRange.firstIncluded === 1} className={`${classes.carousel__arrow}`} onClick={carousel.setPreviousPage}
                                type='button'>
                            <ArrowLeft className={`${classes.carousel__arrowLeft}`} height={52} width={52}/>
                        </button>
                        <button aria-disabled={carousel.currentRange.lastIncluded === children.length} className={`${classes.carousel__arrow}`} onClick={carousel.setNextPage}
                                type='button'>
                            <ArrowRight className={`${classes.carousel__arrowRight}`} height={52} width={52}/>
                        </button>
                    </div>
                </div>
                <div className={`${classes.carousel__itemsGroup}`} id={GROUP_ID}>
                    {children.map((child, key) => (
                        <div aria-current={inActiveRange(key + 1)} className={`${classes.carousel__itemWrapper}`} key={key}>
                            {child}
                        </div>
                    ))}
                </div>
                <div className={`${classes.carousel__indicatorsWrapper} cc-flex cc-gap-2 cc-pt-7 cc-width-1of1 cc-justify-content-center`}>
                    {placeIndicators(carousel.currentRange, children.length)}
                </div>
                {data.button}
            </div>
        </div>
    );
};