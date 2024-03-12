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

    if (width >= breakpoints.laptop) return <CatalogSpoiler data={data} />
    return (
        <div className={`${classes.catalogDisplay__wrapper} ${className}`} {...props}>
            <div className={`${classes.catalogDisplay__content} cc-grid cc-gap-7`}>
                <Carousel data={{...data, buttonText: 'Посмотреть все товары'}} id={id}>
                    {data.products.map((product, key) => (
                        <DetailedProductCard data={product} key={key} />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};