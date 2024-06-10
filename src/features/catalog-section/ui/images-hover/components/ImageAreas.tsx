import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from '../ImagesHover.module.scss';
import {ImageAreasData} from "../../../model/props";

interface ImageAreasProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImageAreasData;
}

export const ImageAreas: FC<ImageAreasProps> = ({className, data, ...props}: ImageAreasProps) => {
    const areas: ReactNode[] = [];
    for (let i = 0; i < data.amount; i++) {
        areas.push(<div className={`${classes.imagesSlider__imageArea} cc-width-1of1`} key={i} onMouseEnter={() => data.setActive(i)}/>)
    }

    return (
        <div className={`${classes.imageAreas__wrapper} ${className}`} {...props}>
            <div className={`${classes.imageAreas__content} cc-flex`}>
                {areas}
            </div>
        </div>
    );
};