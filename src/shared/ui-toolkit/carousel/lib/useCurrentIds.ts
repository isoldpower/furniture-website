import {EmblaCarouselType} from "embla-carousel";
import {useCallback, useEffect, useMemo, useState} from "react";

export const useCurrentIds = (emblaApi: EmblaCarouselType) => {
    const [currentIds, setCurrentIds] = useState<number[]>([]);
    const [inactiveIds, setInactiveIds] = useState<number[]>([]);
    const orderedIds = useMemo(() => {
        if (!emblaApi) return [];

        return Array
            .from({ length: emblaApi.slideNodes().length }, (_, i) => ({
                id: i,
                inView: currentIds.includes(i)
            }))
            .sort((a, b) => a.id - b.id);
    }, [currentIds, inactiveIds]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setInactiveIds(emblaApi.slidesNotInView());
        setCurrentIds(emblaApi.slidesInView());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi
            .on('reInit', onSelect)
            .on('select', onSelect)
            .on('slidesChanged', onSelect)
            .on('slidesInView', onSelect);
    }, [emblaApi]);

    return {
        active: currentIds,
        inactive: inactiveIds,
        ordered: orderedIds
    };
}