import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogModal.module.scss';
import {CatalogModalSectionsFx} from "@/features/catalog-section";

interface CatalogModalProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogModal: FC<CatalogModalProps> = ({className, ...props}: CatalogModalProps) => {
    return (
        <div className={`${classes.catalogModal__wrapper} ${className} catalogModal__hidden`} {...props}>
            <div className={`${classes.catalogModal__content}`}>
                <div className={`${classes.catalogModal__back}`} />
                <div className={`${classes.catalogModal__container} cc-main-gutter`}>
                    <div className={`${classes.catalogModal__containerBack} cc-bg-neutral-000 cc-border-radius-1`}/>
                    <div className={`${classes.catalogModal__catalogWrapper} cc-flex cc-main-gutter-content`}>
                        <CatalogModalSectionsFx />
                    </div>
                </div>
            </div>
        </div>
    );
};