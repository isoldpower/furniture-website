import {FC} from "react";
import classes from './DetailedProductCard.module.scss';
import '@/app/scss/main.scss';

import {websiteRoutes} from "@/shared/lib";
import {Product, ProductCard, ProductCardDescription} from "@/entities/product";
import {ImagesHover} from "@/features/catalog-section";
import {ListPreviewMaterials, ProductImagesFx, ProductPreviewMaterialsFx} from "@/features/product";
import {useParamsParsed} from "@/app/providers";

interface DetailedProductCardProps {
    data?: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({data}: DetailedProductCardProps) => {
    const {section, product} = useParamsParsed();

    return (
        <ProductCard href={websiteRoutes.catalog + section.href_postfix + data?.href_postfix}>
            <div className={`${classes.imagesHover__wrapper}`}>
                <ProductImagesFx {...product}>
                    <ImagesHover images={product.images} />
                </ProductImagesFx>
            </div>
            <ProductCardDescription data={data}>
                <ProductPreviewMaterialsFx {...product}>
                    <ListPreviewMaterials materials={product.materials} />
                </ProductPreviewMaterialsFx>
            </ProductCardDescription>
        </ProductCard>
    )
};