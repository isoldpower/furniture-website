import {FC} from "react";
import '@/app/scss/main.scss';
import {websiteRoutes} from "@/shared/lib";
import {Product, ProductCard} from "@/entities/product";
import {useGetProductImagesQuery, useGetProductMaterialsQuery} from "@/widgets/product";
import {ImagesHover} from "@/features/catalog-section";
import {ListPreviewMaterials, ProductImagesFx, ProductPreviewMaterialsFx} from "@/features/product";
import {ProductCardDescription} from "@/entities/product/ui/product-card/ProductCardDescription";
import classes from './DetailedProductCard.module.scss';

interface DetailedProductCardProps {
    data?: Product;
}

export const DetailedProductCard: FC<DetailedProductCardProps> = ({data}: DetailedProductCardProps) => {
    const {...materialsQuery} = useGetProductMaterialsQuery(data?.id);
    const {...imagesQuery} = useGetProductImagesQuery(data?.id);

    return (
        <ProductCard href={websiteRoutes.catalog + data?.section.href_postfix + data?.href_postfix}>
            <div className={`${classes.imagesHover__wrapper}`}>
                <ProductImagesFx {...imagesQuery}>
                    <ImagesHover images={imagesQuery.currentData} />
                </ProductImagesFx>
            </div>
            <ProductCardDescription data={data}>
                <ProductPreviewMaterialsFx {...materialsQuery}>
                    <ListPreviewMaterials materials={materialsQuery.currentData} />
                </ProductPreviewMaterialsFx>
            </ProductCardDescription>
        </ProductCard>
    )
};