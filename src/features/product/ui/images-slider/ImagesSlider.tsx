import {BaseHTMLAttributes, FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesSlider.module.scss';
import {Carousel, ProgressiveImage} from "@/shared/ui-toolkit";
import {ArrowLeft, ArrowRight} from "@/shared/icons";
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {InspectImage} from "@/features/product";
import {ImagesSliderData} from "../../model/props";

interface ImagesSliderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImagesSliderData;
}

export const ImagesSlider: FC<ImagesSliderProps> = ({className, data, ...props}: ImagesSliderProps) => {
    const [current, setCurrent] = useState<number>(0);
    const width = useDocumentSize().x;

    const items = data.images.map((image, key) => (
        <button className={`${classes.imagesSlider__previewWrapper} cc-width-1of1`} key={key} onClick={() => setCurrent(key)} type='button'>
            <ProgressiveImage aria-selected={key === current} className={`${classes.imagesSlider__preview}`} image={image} />
        </button>
    ));

    return (
        <div className={`${classes.imagesSlider__wrapper} ${className}`} {...props}>
            <div className={`${classes.imagesSlider__content} cc-grid`}>
                <div className={`${classes.imagesSlider__previewsWrapper} cc-flex`}>
                    <Carousel
                        id="images-2"
                        itemClass={`${classes.imagesSlider__carouselItem} ${classes.imagesSlider__itemSpacing}`}
                        leftArrow={<div className={`${classes.imageSlider__leftArrow}`}><ArrowLeft/></div>}
                        rightArrow={<div className={`${classes.imageSlider__rightArrow}`}><ArrowRight/></div>}
                        vertical={width >= breakpoints.laptop}>
                        {items}
                    </Carousel>
                </div>
                <div className={`${classes.imageSlider__imageWrapper}`}>
                    <InspectImage className={`${classes.imagesSlider__currentImage}`} data={data?.images[current]}>
                        <ProgressiveImage className={`${classes.imagesSlider__currentImage}`} image={data?.images[current] ?? {
                            low: '',
                            high: '',
                            alt: 'undefined'
                        }}/>
                    </InspectImage>
                </div>
            </div>
        </div>
    );
};