import '@/app/scss/main.scss';
import {ImgHTMLAttributes, FC, useEffect, useState, useCallback} from "react";
import {ProgressiveImageData} from "../../model";
import classes from './ProgressiveImage.module.scss';

interface ProgressiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    image: ProgressiveImageData;
}

export const ProgressiveImage: FC<ProgressiveImageProps> = ({image, className, ...props}: ProgressiveImageProps) => {
    const [imgSrc, setImgSrc] = useState<string>();
    const [color, setColor] = useState<string>('transparent');

    const createEmptyImage = useCallback(() => {
        const fullImage = new Image();
        fullImage.src = image?.src;
        return fullImage;
    }, [image?.src]);

    const swapImageFace = useCallback(() => {
        setImgSrc(image?.src);
        setColor('black');
    }, [image?.src]);

    useEffect(() => {
        setImgSrc(image?.low_src);
        const backLoader = createEmptyImage();
        backLoader.addEventListener('load', swapImageFace);
        return () => backLoader.removeEventListener('load', swapImageFace);
    }, [createEmptyImage, swapImageFace, image]);

    return (
        <img alt={image?.alt}
             className={`${classes.progressiveImage__image} ${className}`}
             src={imgSrc}
             style={{color: color, ...props.style}}
             {...props} />
    );
};