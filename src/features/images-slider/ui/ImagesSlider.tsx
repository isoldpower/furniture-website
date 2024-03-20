import {BaseHTMLAttributes, FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './ImagesSlider.module.scss';
import {ImagesSliderData} from "@/features/images-slider/model";
import {HorizontalCarousel, ProgressiveImage} from "@/shared/ui";
import {ArrowLeft, ArrowRight} from "@/shared/icons";

interface ImagesSliderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImagesSliderData;
}

export const ImagesSlider: FC<ImagesSliderProps> = ({className, data, ...props}: ImagesSliderProps) => {
    const [current, setCurrent] = useState<number>(0);
    const items = data.images.concat(data.images).concat(data.images).map((image, key) => (
        <button className={`${classes.imagesSlider__previewWrapper} cc-width-1of1`} key={key} onClick={() => setCurrent(key)} type='button'>
            <ProgressiveImage aria-selected={key === current} className={`${classes.imagesSlider__preview}`} image={image} />
        </button>
    ));

    return (
        <div className={`${classes.imagesSlider__wrapper} ${className}`} {...props}>
            <div className={`${classes.imagesSlider__content} cc-flex cc-justify-content-space`}>
                <div className={`${classes.imagesSlider__previewsWrapper} cc-flex cc-gap-2`}>
                    <div className={`${classes.imagesSlider__horizontalPreview}`}>
                        <HorizontalCarousel className={`${classes.imagesSlider__carousel} cc-width-1of1`} data={{
                            button: undefined,
                            title: '',
                            leftArrow: <div className={`${classes.imageSlider__leftArrow}`}><ArrowLeft/></div>,
                            rightArrow: <div className={`${classes.imageSlider__rightArrow}`}><ArrowRight/></div>
                        }} id="images-2" itemClass={classes.imagesSlider__horizontalItem}>{items}</HorizontalCarousel>
                    </div>
                    <div className={`${classes.imagesSlider__verticalPreview}`} />
                </div>
                <div className={`${classes.imageSlider__imageWrapper} cc-main-gutter`}>
                    <ProgressiveImage className={`${classes.imagesSlider__currentImage} cc-main-gutter-content`} image={data.images[current]} />
                </div>
            </div>
        </div>
    );
};