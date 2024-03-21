import {BaseHTMLAttributes, FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesSlider.module.scss';
import {ImagesSliderData} from "@/features/images-slider/model";
import {Carousel, ProgressiveImage} from "@/shared/ui";
import {ArrowLeft, ArrowRight} from "@/shared/icons";
import {breakpoints, useDocumentSize} from "@/shared/lib";

interface ImagesSliderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImagesSliderData;
}

export const ImagesSlider: FC<ImagesSliderProps> = ({className, data, ...props}: ImagesSliderProps) => {
    const [current, setCurrent] = useState<number>(0);
    const width = useDocumentSize().x;
    const items = data.images.concat(data.images).concat(data.images).map((image, key) => (
        <button className={`${classes.imagesSlider__previewWrapper} cc-width-1of1`} key={key} onClick={() => setCurrent(key)} type='button'>
            <ProgressiveImage aria-selected={key === current} className={`${classes.imagesSlider__preview}`} image={image} />
        </button>
    ));

    return (
        <div className={`${classes.imagesSlider__wrapper} ${className}`} {...props}>
            <div className={`${classes.imagesSlider__content} cc-grid`}>
                <div className={`${classes.imagesSlider__previewsWrapper} cc-flex`}>
                    <Carousel className={`${classes.imagesSlider__carousel} cc-width-1of1`} data={{
                        button: undefined,
                        title: '',
                        leftArrow: <div className={`${classes.imageSlider__leftArrow}`}><ArrowLeft/></div>,
                        rightArrow: <div className={`${classes.imageSlider__rightArrow}`}><ArrowRight/></div>,
                        vertical: width >= breakpoints.laptop
                    }} id="images-2" itemClass={`${classes.imagesSlider__carouselItem} ${classes.imagesSlider__itemSpacing}`}>{items}</Carousel>
                </div>
                <div className={`${classes.imageSlider__imageWrapper}`}>
                    <ProgressiveImage className={`${classes.imagesSlider__currentImage}`} image={data.images[current]}/>
                </div>
            </div>
        </div>
    );
};