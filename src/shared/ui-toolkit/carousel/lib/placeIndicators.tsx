import {ReactNode} from "react";
import {CarouselIndicator} from "../ui/CarouselIndicator";
import {EmblaCarouselType} from "embla-carousel";

export const placeIndicators = (emblaApi: EmblaCarouselType) => {
    const indicators: ReactNode[] = [];

    for (let i = 0; i < length; i++) {
        const isActive = emblaApi.slidesInView().includes(i);

        indicators.push(
            <CarouselIndicator active={isActive} key={i} />
        )
    }

    return indicators;
}