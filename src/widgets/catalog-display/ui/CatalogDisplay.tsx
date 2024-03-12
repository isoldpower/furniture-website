import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './CatalogDisplay.module.scss';
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {CatalogSpoiler, ProductData} from "@/entities";
import {Carousel, MoreLink} from "@/shared/ui";
import {DetailedProductCard} from "@/widgets";

interface CatalogDisplayData {
    title: string;
    href: string;
    products: ProductData[];
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

    if (width >= breakpoints.laptop) return <CatalogSpoiler data={data} />
    return (
        <div className={`${classes.catalogDisplay__wrapper} ${className}`} {...props}>
            <div className={`${classes.catalogDisplay__content}`}>
                <Carousel data={{
                    ...data,
                    title: <h2 className={`${classes.catalogDisplay__heading} cc-heading-2`}>{data.title}</h2>,
                    button: <div className={`${classes.catalogDisplay__button} cc-grid cc-pt-7`}>
                        <MoreLink to={data.href}>Посмотреть все товары</MoreLink>
                    </div>
                }} id={id}>{items}</Carousel>
            </div>
        </div>
    );
};