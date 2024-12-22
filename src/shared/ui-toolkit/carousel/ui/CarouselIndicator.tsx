import classes from "./Carousel.module.scss";
import {BaseHTMLAttributes, FC} from "react";

type CarouselIndicatorProps = {
    active: boolean;
} & BaseHTMLAttributes<HTMLDivElement>

export const CarouselIndicator: FC<CarouselIndicatorProps> = ({ active, ...props }) => {
    return (
        <div aria-selected={active}
             className={`${classes.horizontalCarousel__indicator} cc-border-radius-1`}
             {...props}
        />
    );
}