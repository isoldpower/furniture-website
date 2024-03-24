import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './InspectImage.module.scss';
import {ProgressiveImageData} from "@/shared/ui";
import {openWindow, useAppDispatch} from "@/app/redux";
import {setImage} from "@/app/redux/features/gallery/gallerySlice";

interface InspectImageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    data: ProgressiveImageData;
    children: ReactNode;
}

export const InspectImage: FC<InspectImageProps> = ({className, data, ...props}: InspectImageProps) => {
    const dispatch = useAppDispatch();
    const openImage = () => {
        dispatch(setImage(data));
        setTimeout(() => {
            dispatch(openWindow('portfolio'));
        }, 100);
    }

    return (
        <button onClick={openImage} {...props} className={`${classes.inspectImage__wrapper} ${className}`} type='button'/>
    );
};