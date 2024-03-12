import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsDisplay.module.scss';
import {breakpoints, useDocumentSize} from "@/shared/lib";

interface MaterialsDisplayProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const MaterialsDisplay: FC<MaterialsDisplayProps> = ({className, ...props}: MaterialsDisplayProps) => {
    const width = useDocumentSize().x;

    if (width >= breakpoints.laptop) return;
    return (
        <div className={`${classes.materialsDisplay__wrapper} ${className}`} {...props}>
            <div className={`${classes.materialsDisplay__content}`} />
        </div>
    );
};