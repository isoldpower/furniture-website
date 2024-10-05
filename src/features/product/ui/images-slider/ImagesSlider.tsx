import {BaseHTMLAttributes, FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesSlider.module.scss';
import {Carousel, ProgressiveImage, ProgressiveImageData} from "@/shared/ui-toolkit";
import {ArrowLeft, ArrowRight} from "@/shared/icons";
import {breakpoints, imageFailed, useDocumentSize} from "@/shared/lib";
import {InspectImage} from "@/features/product";

interface ImagesSliderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProgressiveImageData[];
}

export const ImagesSlider: FC<ImagesSliderProps> = ({data, className, ...props}: ImagesSliderProps) => {
    const [current, setCurrent] = useState<number>(0);
    const width = useDocumentSize().x;

    const items = data?.map((image, key) => (
        <button className={`${classes.imagesSlider__previewWrapper} cc-width-1of1`} key={key} onClick={() => setCurrent(key)} type='button'>
            <ProgressiveImage aria-selected={key === current} className={`${classes.imagesSlider__preview}`} image={image} />
        </button>
    ));

    return data ? (
        <div className={`${classes.imagesSlider__wrapper} ${className}`} {...props}>
            <div className={`${classes.imagesSlider__content} cc-grid`}>
                <div className={`${classes.imagesSlider__previewsWrapper} cc-flex`}>
                    <Carousel id="images-2"
                        leftArrow={<div className={`${classes.imageSlider__leftArrow}`}><ArrowLeft/></div>}
                        rightArrow={<div className={`${classes.imageSlider__rightArrow}`}><ArrowRight/></div>}
                        vertical={width >= breakpoints.laptop}>
                        {items.map((item, key) => (
                            <div className={`${classes.imagesSlider__carouselItem} ${classes.imagesSlider__itemSpacing}`} key={key}>
                                {item}
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className={`${classes.imageSlider__imageWrapper}`}>
                    <InspectImage className={`${classes.imagesSlider__currentImage}`} data={data[current]}>
                        <ProgressiveImage className={`${classes.imagesSlider__currentImage}`}
                                          image={data[current] ?? imageFailed} />
                    </InspectImage>
                </div>
            </div>
        </div>
    ) : undefined;
};