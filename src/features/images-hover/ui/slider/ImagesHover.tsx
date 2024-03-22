import {BaseHTMLAttributes, FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesHover.module.scss';
import {ProgressiveImage} from "@/shared/ui";
import {ImageBar} from "@/features/images-hover/ui/bar/ImageBar";
import {ImageAreas} from "@/features/images-hover/ui/areas/ImageAreas";
import {ImagesHoverData} from "@/features/images-hover/model";

interface ImagesHoverProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImagesHoverData;
}

export const ImagesHover: FC<ImagesHoverProps> = ({className, data, ...props}: ImagesHoverProps) => {
    const [active, setActive] = useState<number>(0);
    const actualImages = data.images.slice(0, 4);

    return (
        <div className={`${classes.imagesSlider__wrapper} ${className} cc-flex`} {...props}
             onMouseLeave={() => setActive(0)}>
            <div className={`${classes.imagesSlider__content} cc-flex`}>
                <ImageAreas data={{setActive: setActive, amount: actualImages.length}}/>
                <ProgressiveImage className={`${classes.imagesSlider__image}`} image={actualImages[active] ?? {
                    high: '',
                    low: '',
                    alt: 'undefined'
                }}/>
                {actualImages.length >= 2 ? <ImageBar data={{amount: actualImages.length, active: active}}/> : null}
            </div>
        </div>
    );
};