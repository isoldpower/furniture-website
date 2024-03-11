import {Range} from '../model';
import classes from '../ui/Carousel.module.scss';
import {ReactNode} from "react";

export const placeIndicators = (activeRange: Range, length: number) => {
    const indicators: ReactNode[] = [];

    for (let i = 0; i < length; i++) {
        const isActive: boolean = i + 1 >= activeRange.firstIncluded && i + 1 <= activeRange.lastIncluded;
        indicators.push(
            <div aria-selected={isActive} className={`${classes.carousel__indicator} cc-border-radius-1`} key={i}/>
        )
    }

    return indicators;
}