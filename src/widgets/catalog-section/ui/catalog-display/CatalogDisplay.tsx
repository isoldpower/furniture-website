import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogDisplay.module.scss';
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {Carousel, MoreLink} from "@/shared/ui";
import {DetailedProductCard} from "@/widgets/product";
import {Product} from "@/entities/product";
import {SectionSpoiler} from "@/entities/catalog-section";

interface CatalogDisplayData {
    title: string;
    href: string;
    hrefPostfix: string;
    products: Product[];
}

interface CatalogDisplayProps extends BaseHTMLAttributes<HTMLDivElement> {
    id: string;
    data: CatalogDisplayData;
}

export const CatalogDisplay: FC<CatalogDisplayProps> = ({className, data, id, ...props}: CatalogDisplayProps) => {
    const width = useDocumentSize().x;
    const items = data.products.map((product, key) => (
        <DetailedProductCard data={product} key={key} />
    ));

    return width >= breakpoints.laptop
        ? (
            <SectionSpoiler data={{
                ...data,
                button: <MoreLink to={data.href}>Смотреть все товары</MoreLink>
            }}>{items}</SectionSpoiler>
        )
        : (
            <div className={`${classes.catalogDisplay__wrapper} ${className}`} {...props}>
                <div className={`${classes.catalogDisplay__content}`}>
                    <Carousel data={{
                        ...data,
                        title: <h2 className={`${classes.catalogDisplay__heading} cc-heading-2`}>{data.title}</h2>,
                        button: <div className={`${classes.catalogDisplay__button} cc-grid cc-pt-7`}>
                            <MoreLink to={data.href}>Посмотреть все товары</MoreLink>
                        </div>,
                        indicators: true,
                    }} id={id} itemClass={`${classes.catalogDisplay__item}`}>{items}</Carousel>
                </div>
            </div>
        );
};