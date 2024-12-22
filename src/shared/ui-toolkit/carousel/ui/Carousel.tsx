import {BaseHTMLAttributes, Children, cloneElement, FC, ReactElement, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Carousel.module.scss';
import useCarousel from "embla-carousel-react";
import {ArrowLeft, ArrowRight} from "@/shared/icons";
import {CarouselNext, CarouselPrev} from "./ControlButton";
import {CarouselIndicatorsList} from "./CarouselIndicatorsList";
import {useControlButtons} from "@/shared/ui-toolkit/carousel/lib/useControlButtons";
import {useCurrentIds} from "@/shared/ui-toolkit/carousel/lib/useCurrentIds";

interface CarouselProps extends Omit<BaseHTMLAttributes<HTMLDivElement>, 'title'> {
    indicators?: boolean;
    vertical?: boolean;
    title?: ReactNode;
    button?: ReactNode;
    leftArrow?: ReactNode;
    rightArrow?: ReactNode;
    children: ReactNode;
}

export const Carousel: FC<CarouselProps> = ({
    children = [],
    vertical = false,
    title,
    leftArrow,
    rightArrow,
    button,
    indicators = false,
    ...props
}: CarouselProps) => {
    const [emblaRef, emblaApi] = useCarousel({
        axis: vertical ? 'y' : 'x',
        inViewThreshold: 0.9,
        align: "start"
    });
    const itemType = vertical ? 'vertical' : 'horizontal';
    const {prevBtnDisabled} = useControlButtons(emblaApi);
    const {active} = useCurrentIds(emblaApi);

    const carouselItems = Children.toArray(children).map((child, key) => {
        const element = child as ReactElement;
        return cloneElement(element, {
            className: element.props.className + ` ${classes.horizontalCarousel__itemWrapper}`,
            "aria-current": active.includes(key),
            key
        });
    });
    console.log(active);

    return (
        <div className={`${classes.horizontalCarousel__wrapper} cc-main-gutter cc-flex cc-flex-col cc-py-1`} itemType={itemType} {...props}>
            <div className={`${classes.horizontalCarousel__headWrapper} cc-flex cc-justify-content-space cc-align-items-center`}>
                <div className={`${classes.horizontalCarousel__title}`}>
                    {title ? title : undefined}
                </div>
                <div className={`${classes.horizontalCarousel__controls} cc-flex cc-gap-2`}>
                    <CarouselPrev emblaApi={emblaApi}>
                        {leftArrow ?? <ArrowLeft className={`${classes.horizontalCarousel__arrowLeft} cc-mb-7`} height={52} width={52}/>}
                    </CarouselPrev>
                    <CarouselNext emblaApi={emblaApi}>
                        {rightArrow ?? <ArrowRight className={`${classes.horizontalCarousel__arrowRight} cc-mb-7`} height={52} width={52}/>}
                    </CarouselNext>
                </div>
            </div>
            {Children.toArray(children).length > 0 ? (
                <div className={`${classes.horizontalCarousel__container} h-full w-full`} ref={emblaRef}>
                    <div
                        aria-expanded={!prevBtnDisabled}
                        className={classes.horizontalCarousel__itemsGroup}
                        itemType={itemType}>
                        {carouselItems || undefined}
                    </div>
                </div>
            ): undefined}
            {indicators ? <div className={`${classes.horizontalCarousel__indicatorsWrapper} cc-flex cc-gap-2 cc-pt-7 cc-width-1of1 cc-justify-content-center`}>
                <CarouselIndicatorsList emblaApi={emblaApi} />
            </div> : undefined}
            {button ? button : undefined}
        </div>
    );
};