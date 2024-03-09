import '@/app/scss/main.scss';
import {ImgHTMLAttributes, FC, useEffect, useState} from "react";
import {ProgressiveImageData} from "../../model";

interface ProgressiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    image: ProgressiveImageData;
}

export const ProgressiveImage: FC<ProgressiveImageProps> = ({image, ...props}: ProgressiveImageProps) => {
    const [imgSrc, setImgSrc] = useState<string>(image.low);
    const [color, setColor] = useState<string>('transparent');

    useEffect(() => {
        const image = createEmptyImage();
        image.onload = loadFullImage;
    }, [image.low]);

    const createEmptyImage = () => {
        const fullImage = new Image();
        fullImage.src = image.original;
        return fullImage;
    }

    const loadFullImage = () => {
        setImgSrc(image.original);
        setColor('black');
    }

    return (
        <img style={{color: color, ...props.style}} src={imgSrc} alt={image.alt} {...props} />
    );
};