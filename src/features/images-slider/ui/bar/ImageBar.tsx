import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './ImageBar.module.scss';

interface ImageBarData {
    active: number;
    amount: number;
}

interface ImageBarProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ImageBarData;
}

export const ImageBar: FC<ImageBarProps> = ({className, data, ...props}: ImageBarProps) => {
    const bars: ReactNode[] = [];
    for (let i = 0; i < data.amount; i++) {
        bars.push(<div className={`${classes.imageBar__element}`} aria-selected={data.active === i}/>)
    }

    return (
        <div className={`${classes.imageBar__wrapper} ${className}`} {...props}>
            <div className={`${classes.imageBar__content}`}>
                {bars}
            </div>
        </div>
    );
};