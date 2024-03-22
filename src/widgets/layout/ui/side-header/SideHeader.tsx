import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './SideHeader.module.scss';

interface SideHeaderData {
}

interface SideHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: SideHeaderData;
}

export const SideHeader: FC<SideHeaderProps> = ({className, ...props}: SideHeaderProps) => {
    return (
        <div className={`${classes.sideHeader__wrapper} ${className}`} {...props}>
            <div className={`${classes.sideHeader__content}`}>
                hello ???
            </div>
        </div>
    );
};