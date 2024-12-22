import {ComponentPropsWithRef, FC} from "react";
import classes from './Carousel.module.scss';
import type {EmblaCarouselType} from "embla-carousel";
import {useControlButtons} from "@/shared/ui-toolkit/carousel/lib/useControlButtons";

type CarouselButtonProps = ComponentPropsWithRef<'button'> & {
    emblaApi: EmblaCarouselType;
}

export const CarouselNext: FC<CarouselButtonProps> = ({ children, emblaApi, ...props }) => {
    const {nextBtnDisabled, onNextButtonClick} = useControlButtons(emblaApi);

    return (
        <button
            aria-disabled={nextBtnDisabled}
            className={classes.horizontalCarousel__arrow}
            disabled={nextBtnDisabled}
            onClick={onNextButtonClick}
            type='button'
            {...props}
        >
            {children}
        </button>
    );
}

export const CarouselPrev: FC<CarouselButtonProps> = ({ children, emblaApi, ...props }) => {
    const {onPrevButtonClick, prevBtnDisabled} = useControlButtons(emblaApi);

    return (
        <button
            aria-disabled={prevBtnDisabled}
            className={classes.horizontalCarousel__arrow}
            disabled={prevBtnDisabled}
            onClick={onPrevButtonClick}
            type='button'
            {...props}
        >
            {children}
        </button>
    );
}