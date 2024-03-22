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

    return (
        <div className={`${classes.imagesSlider__wrapper} ${className} cc-flex`} {...props}
             onMouseLeave={() => setActive(0)}>
            <div className={`${classes.imagesSlider__content} cc-flex`}>
                <ImageAreas data={{setActive: setActive, amount: data.images.length}}/>
                <ProgressiveImage className={`${classes.imagesSlider__image}`} image={data.images[active] ?? {
                    high: '',
                    low: '',
                    alt: 'undefined'
                }}/>
                {data.images.length >= 2 ? <ImageBar data={{amount: data.images.length, active: active}}/> : null}
            </div>
        </div>
    );
};