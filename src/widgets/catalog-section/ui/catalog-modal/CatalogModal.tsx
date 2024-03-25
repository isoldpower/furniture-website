import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogModal.module.scss';
import {sections} from "@/widgets/catalog-section";
import {SectionHeaderCard} from "@/entities/catalog-section/ui/section-header-card/SectionHeaderCard";
import {breakpoints, useDocumentSize} from "@/shared/lib";

interface CatalogModalProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogModal: FC<CatalogModalProps> = ({className, ...props}: CatalogModalProps) => {
    const width = useDocumentSize().x;
    const itemsAmount = width >= breakpoints.desktop ? 4 : 3;

    return (
        <div className={`${classes.catalogModal__wrapper} ${className} catalogModal__hidden`} {...props}>
            <div className={`${classes.catalogModal__content}`}>
                <div className={`${classes.catalogModal__back}`} />
                <div className={`${classes.catalogModal__container} cc-main-gutter`}>
                    <div className={`${classes.catalogModal__containerBack} cc-bg-neutral-000 cc-border-radius-1`}/>
                    <div className={`${classes.catalogModal__catalogWrapper} cc-main-gutter-content`}>
                        <div className={`${classes.catalogModal__catalog} cc-grid cc-gap-5 cc-py-10`}>
                            {sections.slice(0, itemsAmount).map((section, key) => (
                                <SectionHeaderCard data={section} key={key} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};