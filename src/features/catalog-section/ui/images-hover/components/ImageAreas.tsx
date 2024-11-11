import {Children, FC, ReactNode, useCallback} from "react";
import '@/app/scss/main.scss';
import classes from '../ImagesHover.module.scss';

type ImageAreasProps = {
    setActive: (active: number) => void;
    children: ReactNode;
};

export const ImageAreas: FC<ImageAreasProps> = ({setActive, children}: ImageAreasProps) => {
    const handleMouseEnter = useCallback((index: number) => {
        setActive(index);
    }, [setActive]);

    return setActive ? (
        <div className={`${classes.imageAreas__content}`}>
            <div className={`${classes.imageAreas__hoverAreas} cc-flex`}>
                {Children.toArray(children).map((_, index: number) => (
                    <div className={`${classes.imagesSlider__imageArea} cc-width-1of1`}
                         key={index} 
                         onClick={() => handleMouseEnter(index)}
                         onMouseEnter={() => handleMouseEnter(index)} />
                ))}
            </div>
            <div className={`${classes.imageAreas__images}`}>
                {children}
            </div>
        </div>
    ) : undefined;
};