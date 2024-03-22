import '@/app/scss/main.scss';
import {ImgHTMLAttributes, FC, useEffect, useState, useCallback} from "react";
import {ProgressiveImageData} from "../../model";

interface ProgressiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    image: ProgressiveImageData;
}

export const ProgressiveImage: FC<ProgressiveImageProps> = ({image, ...props}: ProgressiveImageProps) => {
    const [imgSrc, setImgSrc] = useState<string>(image.low);
    const [color, setColor] = useState<string>('transparent');

    const createEmptyImage = useCallback(() => {
        const fullImage = new Image();
        fullImage.src = image.high;
        return fullImage;
    }, [image.high]);

    const loadFullImage = useCallback(() => {
        setImgSrc(image.high);
        setColor('black');
    }, [image.high]);

    useEffect(() => {
        const image = createEmptyImage();
        image.onload = loadFullImage;
    }, [image.low, createEmptyImage, loadFullImage]);

    return (
        <img alt={image.alt} src={imgSrc} style={{color: color, ...props.style}} {...props} />
    );
};