import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {ProgressiveImageData} from "@/shared/ui-toolkit";
import {openWindow, changeData, useAppDispatch} from "@/app/redux";

interface InspectImageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    data: ProgressiveImageData;
    children: ReactNode;
}

export const InspectImage: FC<InspectImageProps> = ({data, ...props}: InspectImageProps) => {
    const dispatch = useAppDispatch();
    const openImage = () => {
        dispatch(changeData(['portfolio', data]));
        setTimeout(() => {
            dispatch(openWindow('portfolio'));
        }, 100);
    };

    return (
        <button onClick={openImage} {...props} type='button' />
    );
};