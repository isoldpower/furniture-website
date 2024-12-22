import {FC} from "react";
import {EmblaCarouselType} from "embla-carousel";
import {CarouselIndicator} from "@/shared/ui-toolkit/carousel/ui/CarouselIndicator";
import {useCurrentIds} from "@/shared/ui-toolkit/carousel/lib/useCurrentIds";

type CarouselIndicatorsListProps = {
    emblaApi: EmblaCarouselType;
}

export const CarouselIndicatorsList: FC<CarouselIndicatorsListProps> = ({ emblaApi }) => {
    const {ordered} = useCurrentIds(emblaApi);

    return ordered.map((item, key) => (
        <CarouselIndicator active={item.inView} key={key} />
    ));
}