import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductOverview.module.scss';
import {Product} from "@/entities/product";
import {ProductMaterialsFx, ProductImagesFx, ImagesSlider} from "@/features/product";
import {OrderProductProject} from "@/features/feedback";
import {MaterialPreview} from "@/entities/material";
import {useGetProductQuery} from "@/widgets/product";

interface ItemOverviewProps {
    data: Product;
}

export const ProductOverview: FC<ItemOverviewProps> = ({ data }) => {
    const {...productQuery} = useGetProductQuery(data?.id);

    return (
        <div className={`${classes.itemOverview__content} cc-grid cc-rgap-9`}>
            <div className={`${classes.itemOverview__smallHeading}`}>
                <h1 className={`${classes.itemOverview__heading}`}>{data?.title}</h1>
            </div>
            <ProductImagesFx {...productQuery}>
                <ImagesSlider data={productQuery.currentData?.images} />
            </ProductImagesFx>
            <div className={`${classes.itemOverview__bodyWrapper} cc-flex cc-flex-col cc-gap-10`}>
                <div className={`${classes.itemOverview__largeHeading}`}>
                    <h1 className={`${classes.itemOverview__heading}`}>{data?.title}</h1>
                </div>
                <div className={`${classes.itemOverview__body} cc-grid cc-gap-10`}>
                    <div className={`${classes.itemOverview__description} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                        <h4 className={`${classes.itemOverview__descriptionHeading} cc-fs-300`}>Описание</h4>
                        <p className={`${classes.itemOverview__descriptionParagraph}`}>{data?.description}</p>
                    </div>
                    <div className={`${classes.itemOverview__materials} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                        <h4 className={`${classes.itemOverview__materialsHeading} cc-fs-300`}>Материалы</h4>
                        <ProductMaterialsFx {...productQuery}>
                            <div className={`${classes.itemOverview__materialsWrapper} cc-flex cc-gap-5`}>
                                {productQuery.currentData?.materials?.map((material, key) => (
                                    <div className={`${classes.itemOverview__material}`} key={key}>
                                        <MaterialPreview data={material}/>
                                    </div>
                                ))}
                            </div>
                        </ProductMaterialsFx>
                    </div>
                    <div className={`${classes.itemOverview__additional} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                        <h4 className={`${classes.itemOverview__additionalHeading} cc-fs-300`}>Срок изготовления и
                            стоимость</h4>
                        <p className={`${classes.itemOverview__materialsParagraph}`}>
                            {data?.preparation_time}, {data?.estimated_cost}
                        </p>
                    </div>
                    <div className={`${classes.itemOverview__buttonWrapper}`}>
                        <OrderProductProject data={data}>Заказать проект</OrderProductProject>
                    </div>
                </div>
            </div>
        </div>
    );
};