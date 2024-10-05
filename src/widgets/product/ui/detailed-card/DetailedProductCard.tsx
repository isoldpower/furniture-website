import {FC} from "react";
import classes from './DetailedProductCard.module.scss';
import '@/app/scss/main.scss';

import {websiteRoutes} from "@/shared/lib";

import {Product, ProductCard, ProductCardDescription} from "@/entities/product";
import {ListPreviewMaterials, ProductImagesFx, ProductPreviewMaterialsFx} from "@/features/product";

import {ImagesHover} from "@/features/catalog-section";
import {Section} from "@/entities/catalog-section";
import {useGetProductQuery} from "@/widgets/product";

interface DetailedProductCardProps {
    section?: Section;
    data?: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({ data, section }) => {
    const { ...productQuery } = useGetProductQuery(data?.id);

    return (section && data) ? (
        <ProductCard href={websiteRoutes.catalog + section.href_postfix + data?.href_postfix}>
            <div className={`${classes.imagesHover__wrapper}`}>
                <ProductImagesFx {...productQuery}>
                    <ImagesHover images={productQuery.currentData?.images} />
                </ProductImagesFx>
            </div>
            <ProductCardDescription data={data}>
                <ProductPreviewMaterialsFx {...productQuery}>
                    <ListPreviewMaterials materials={productQuery.currentData?.materials} />
                </ProductPreviewMaterialsFx>
            </ProductCardDescription>
        </ProductCard>
    ) : undefined;
};