import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from '../ImagesHover.module.scss';

type ImageBarData = {
    active: number;
    amount: number;
}

interface ImageBarProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImageBarData;
}

export const ImageBar: FC<ImageBarProps> = ({data, className, ...props}: ImageBarProps) => {
    const bars: ReactNode[] = [];
    for (let i = 0; i < data?.amount; i++) {
        bars.push(<div aria-selected={data?.active === i} className={`${classes.imageBar__element}`} key={i}/>)
    }

    return data ? (
        <div className={`${classes.imageBar__wrapper} ${className}`} {...props}>
            <div className={`${classes.imageBar__content}`}>
                {bars}
            </div>
        </div>
    ) : undefined;
};