import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductOverview.module.scss';
import {Product} from "@/entities/product";
import {Button} from "@/shared/ui";
import {
    ProductOverviewMaterials
} from "@/pages/product-page/ui/mixins/product-overview-materials/ProductOverviewMaterials";
import {ProductOverviewImages} from "@/pages/product-page/ui/mixins/product-overview-images/ProductOverviewImages";
import {openWindow, useAppDispatch} from "@/app/redux";
import {changeData} from "@/app/redux/features/modal/modalSlice";

interface ItemOverviewProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Product;
}

export const ProductOverview: FC<ItemOverviewProps> = ({className, data, ...props}: ItemOverviewProps) => {
    const heading = <h1 className={`${classes.itemOverview__heading}`}>{data.title}</h1>;
    const dispatch = useAppDispatch();
    const openOrder = () => {
        dispatch(changeData(['order', data]));
        setTimeout(() => {
            dispatch(openWindow('order'))
        }, 100);
    };

    return (
        <div className={`${classes.itemOverview__wrapper} ${className}`} {...props}>
            <div className={`${classes.itemOverview__content} cc-grid cc-rgap-9`}>
                <div className={`${classes.itemOverview__smallHeading}`}>
                    {heading}
                </div>
                <ProductOverviewImages productId={data.id}/>
                <div className={`${classes.itemOverview__bodyWrapper} cc-flex cc-flex-col cc-gap-10`}>
                    <div className={`${classes.itemOverview__largeHeading}`}>{heading}</div>
                    <div className={`${classes.itemOverview__body} cc-grid cc-gap-10`}>
                        <div className={`${classes.itemOverview__description} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                            <h4 className={`${classes.itemOverview__descriptionHeading} cc-fs-300`}>Описание</h4>
                            <p className={`${classes.itemOverview__descriptionParagraph}`}>{data.description}</p>
                        </div>
                        <div className={`${classes.itemOverview__materials} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                            <h4 className={`${classes.itemOverview__materialsHeading} cc-fs-300`}>Материалы</h4>
                            <ProductOverviewMaterials productId={data.id}/>
                        </div>
                        <div className={`${classes.itemOverview__additional} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                            <h4 className={`${classes.itemOverview__additionalHeading} cc-fs-300`}>Срок изготовления и
                                стоимость</h4>
                            <p className={`${classes.itemOverview__materialsParagraph}`}>{data.duration}, {data.cost}</p>
                        </div>
                        <div className={`${classes.itemOverview__buttonWrapper}`}>
                            <Button data={{variant: 'accent'}} onClick={() => openOrder()}
                                    semantic="button">Заказать проект</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};