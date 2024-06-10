import '@/app/scss/main.scss';
import {BaseHTMLAttributes, FC} from "react";
import classes from './ProgressiveContainer.module.scss';

interface AdditionalData {
    imageWidth: number;
    imageHeight: number;
}

interface ProgressiveImageProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: AdditionalData;
}

export const ProgressiveContainer: FC<ProgressiveImageProps> = ({className, data, style, ...props}: ProgressiveImageProps) => {
    const paddingBottom = `calc(${data.imageHeight} / ${data.imageWidth} * 100%)`;

    return (
        <div
        className={`${classes.progressiveContainer} ${className}`} {...props}
        style={{paddingBottom: paddingBottom, ...style}}>
            {props.children}
        </div>
    );
};