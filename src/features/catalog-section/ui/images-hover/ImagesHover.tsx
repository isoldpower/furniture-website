import {BaseHTMLAttributes, FC, useRef, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesHover.module.scss';
import {ProgressiveImage} from "@/shared/ui-toolkit";
import {imageFailed} from "@/shared/lib";
import {ImageAreas, ImageBar} from "./components";
import {ImagesHoverData} from "../../model/props";

interface ImagesHoverProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImagesHoverData;
}

export const ImagesHover: FC<ImagesHoverProps> = ({className, data, ...props}: ImagesHoverProps) => {
    const [active, setActive] = useState<number>(0);
    const actualImages = useRef(data.images.slice(0, 4));
    if (actualImages.current.length == 0) actualImages.current = [imageFailed];

    return (
        <div className={`${classes.imagesSlider__wrapper} ${className} cc-flex`} {...props}
             onMouseLeave={() => setActive(0)}>
            <div className={`${classes.imagesSlider__content} cc-flex`}>
                <ImageAreas className={`${classes.imagesSlider__areas}`} data={{setActive: setActive, amount: actualImages?.current.length}}/>
                {actualImages.current.map((image, key) => (
                    <div aria-selected={key === active} className={`${classes.imagesSlider__imageWrapper}`} key={key}>
                        <ProgressiveImage className={`${classes.imagesSlider__image}`} image={image}/>
                    </div>
                ))}
                {actualImages.current.length >= 2 ? <ImageBar className={`${classes.imagesSlider__bar}`} data={{amount: actualImages.current.length, active: active}}/> : null}
            </div>
        </div>
    );
};