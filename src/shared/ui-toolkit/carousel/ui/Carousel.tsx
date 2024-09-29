import {cloneElement, FC, ReactElement, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Carousel.module.scss';
import {ArrowLeft, ArrowRight} from "@/shared/icons";
import {useCarousel} from "../model";
import {placeIndicators} from "@/shared/ui-toolkit/carousel/lib";

interface CarouselProps {
    indicators?: boolean;
    vertical?: boolean;
    title?: ReactNode;
    button?: ReactNode;
    leftArrow?: ReactNode;
    rightArrow?: ReactNode;
    children: ReactNode[];
    id: string;
}

export const Carousel: FC<CarouselProps> = ({children = [], id, ...data}: CarouselProps) => {
    const GROUP_ID = `carousel-${id}`;
    const itemType = data.vertical ? 'vertical' : 'horizontal';
    const carousel = useCarousel(children.length, GROUP_ID, data.vertical);

    const inActiveRange = (number: number): boolean => {
        const overFloor = number >= carousel.currentRange.firstIncluded;
        const belowCeiling = number <= carousel.currentRange.lastIncluded;
        return overFloor && belowCeiling;
    }

    return (
        <div className={`${classes.horizontalCarousel__wrapper} cc-main-gutter cc-flex cc-flex-col cc-py-1`} itemType={itemType}>
            <div className={`${classes.horizontalCarousel__headWrapper} cc-flex cc-justify-content-space cc-align-items-center`}>
                <div className={`${classes.horizontalCarousel__title}`}>
                    {data.title ? data.title : undefined}
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
            <div aria-expanded={carousel.currentRange.firstIncluded !== 1} className={`${classes.horizontalCarousel__itemsGroup}`} id={GROUP_ID} itemType={itemType}>
                {children.map((child, key) => {
                    const element = child as ReactElement;
                    return cloneElement(element, {
                        className: element.props.className + ` ${classes.horizontalCarousel__itemWrapper}`,
                        "aria-current": inActiveRange(key + 1), key
                    });
                })}
            </div>
            {data.indicators ? <div className={`${classes.horizontalCarousel__indicatorsWrapper} cc-flex cc-gap-2 cc-pt-7 cc-width-1of1 cc-justify-content-center`}>
                {placeIndicators(carousel.currentRange, children.length)}
            </div> : undefined}
            {data.button ? data.button : undefined}
        </div>
    );
};