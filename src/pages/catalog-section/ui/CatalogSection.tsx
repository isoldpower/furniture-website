import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogSection.module.scss';
import {Link, useParams} from "react-router-dom";
import {PageTitle} from "@/widgets";

interface CatalogSectionProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const CatalogSection: FC<CatalogSectionProps> = ({className, ...props}: CatalogSectionProps) => {
    const {section} = useParams();

    return (
        <div className={`${classes.catalogSection__wrapper} ${className} cc-main-gutter`} {...props}>
            <div className={`${classes.catalogSection__content} cc-main-gutter-content`}>
                <PageTitle />
            </div>
        </div>
    );
};