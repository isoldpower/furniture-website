import {BaseHTMLAttributes, FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesSlider.module.scss';
import {ImagesSliderData} from "@/features/images-slider/model";
import {ProgressiveImage} from "@/shared/ui";
import {ImageBar} from "@/features/images-slider/ui/bar/ImageBar";
import {ImageAreas} from "@/features/images-slider/ui/areas/ImageAreas";

interface ImagesSliderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImagesSliderData;
}

export const ImagesSlider: FC<ImagesSliderProps> = ({className, data, ...props}: ImagesSliderProps) => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className={`${classes.imagesSlider__wrapper} ${className} cc-flex`} {...props} onMouseLeave={() => setActive(0)}>
            <div className={`${classes.imagesSlider__content} cc-flex`}>
                <ImageAreas data={{setActive: setActive, amount: data.images.length}} />
                <ProgressiveImage className={`${classes.imagesSlider__image}`} image={data.images[active]}/>
                {data.images.length >= 2 ? <ImageBar data={{amount: data.images.length, active: active}} /> : null}
            </div>
        </div>
    );
};