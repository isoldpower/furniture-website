import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './HorizontalCarousel.module.scss';
import {ArrowLeft, ArrowRight} from "@/shared/icons";
import {CarouselData, useCarousel} from "../../model";
import {placeIndicators} from "@/shared/ui/carousel/lib";

interface HorizontalCarouselProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: CarouselData;
    children: ReactNode[];
    id: string;
    itemClass?: string;
}

export const HorizontalCarousel: FC<HorizontalCarouselProps> = ({className, children, data, itemClass, ...props}: HorizontalCarouselProps) => {
    const GROUP_ID = `carousel-${props.id}`;
    const carousel = useCarousel(children.length, GROUP_ID);
    const inActiveRange = (number: number): boolean =>
        number >= carousel.currentRange.firstIncluded && number <= carousel.currentRange.lastIncluded;

    return (
        <div className={`${classes.horizontalCarousel__wrapper} ${className} cc-main-gutter cc-py-1`} {...props}>
            <div className={`${classes.horizontalCarousel__content} cc-main-gutter-content`}>
                <div className={`${classes.horizontalCarousel__headWrapper} cc-flex cc-justify-content-space cc-align-items-center`}>
                    <div className={`${classes.horizontalCarousel__title}`}>
                        {data.title}
                    </div>
                    <div className={`${classes.horizontalCarousel__controls} cc-flex cc-gap-2`}>
                        <button aria-disabled={carousel.currentRange.firstIncluded === 1} className={`${classes.horizontalCarousel__arrow}`} onClick={carousel.setPreviousPage}
                                type='button'>
                            {data.leftArrow ?? <ArrowLeft className={`${classes.horizontalCarousel__arrowLeft} cc-mb-7`} height={52} width={52}/>}
                        </button>
                        <button aria-disabled={carousel.currentRange.lastIncluded === children.length} className={`${classes.horizontalCarousel__arrow}`} onClick={carousel.setNextPage}
                                type='button'>
                            {data.rightArrow ?? <ArrowRight className={`${classes.horizontalCarousel__arrowRight} cc-mb-7`} height={52} width={52}/>}
                        </button>
                    </div>
                </div>
                <div className={`${classes.horizontalCarousel__itemsGroup}`} id={GROUP_ID}>
                    {children.map((child, key) => (
                        <div aria-current={inActiveRange(key + 1)} className={`${classes.horizontalCarousel__itemWrapper} ${itemClass}`} key={key}>
                            {child}
                        </div>
                    ))}
                </div>
                {data.indicators ? <div className={`${classes.horizontalCarousel__indicatorsWrapper} cc-flex cc-gap-2 cc-pt-7 cc-width-1of1 cc-justify-content-center`}>
                    {placeIndicators(carousel.currentRange, children.length)}
                </div> : null}
                {data.button}
            </div>
        </div>
    );
};