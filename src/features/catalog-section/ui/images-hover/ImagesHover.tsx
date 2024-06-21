import {FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesHover.module.scss';
import {ProgressiveImage, ProgressiveImageData} from "@/shared/ui-toolkit";
import {imageFailed} from "@/shared/lib";
import {ImageAreas, ImageBar} from "./components";

interface ImagesHoverProps {
    images: ProgressiveImageData[];
}

export const ImagesHover: FC<ImagesHoverProps> = ({images}: ImagesHoverProps) => {
    const [active, setActive] = useState<number>(0);
    const [actualImages, setActualImages] = useState(images);
    if (actualImages.length == 0) setActualImages([imageFailed]);

    return (
        <div className={`${classes.imagesHover__wrapper}`}>
            <div className={`${classes.imageAreas__wrapper}`} style={{zIndex: 10}}>
                <ImageAreas setActive={setActive}>
                    {actualImages?.map((image, key) => (
                        <div aria-selected={key === active} className={`${classes.imagesSlider__imageWrapper}`} key={key}>
                            <ProgressiveImage className={`${classes.imagesSlider__image}`} image={image} />
                        </div>
                    ))}
                </ImageAreas>
            </div>
            <div style={{zIndex: 9}}>
                {actualImages.length >= 2
                    ? <ImageBar data={{amount: actualImages?.length, active: active}} />
                    : undefined
                }
            </div>
        </div>
    );
};