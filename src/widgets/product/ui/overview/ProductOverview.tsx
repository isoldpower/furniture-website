import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ProductOverview.module.scss';
import {ImagesSlider} from "@/features/images-slider/ui/ImagesSlider";
import {Product} from "@/entities/product";
import {getAllImages} from "@/shared/api";
import {getImageIdsByProductId, getMaterialIdsByProductId} from "@/widgets/product";
import {getAllMaterials} from "@/widgets/material/api";
import {MaterialPreview} from "@/entities/material";
import {Button} from "@/shared/ui";

interface ItemOverviewProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: Product;
}

export const ProductOverview: FC<ItemOverviewProps> = ({className, data, ...props}: ItemOverviewProps) => {
    const materials = getAllMaterials(getMaterialIdsByProductId(data.id));
    const heading = <h1 className={`${classes.itemOverview__heading}`}>{data.title}</h1>;

    return (
        <div className={`${classes.itemOverview__wrapper} ${className}`} {...props}>
            <div className={`${classes.itemOverview__content} cc-grid cc-rgap-9`}>
                <div className={`${classes.itemOverview__smallHeading}`}>
                    {heading}
                </div>
                <ImagesSlider className={`${classes.itemOverview__slider}`} data={{
                    images: getAllImages(getImageIdsByProductId(data.id))
                }}/>
                <div className={`${classes.itemOverview__bodyWrapper} cc-flex cc-flex-col cc-gap-10`}>
                <div className={`${classes.itemOverview__largeHeading}`}>{heading}</div>
                    <div className={`${classes.itemOverview__body} cc-grid cc-gap-10`}>
                        <div className={`${classes.itemOverview__description} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                            <h4 className={`${classes.itemOverview__descriptionHeading} cc-fs-300`}>Описание</h4>
                            <p className={`${classes.itemOverview__descriptionParagraph}`}>{data.description}</p>
                        </div>
                        <div className={`${classes.itemOverview__materials} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                            <h4 className={`${classes.itemOverview__materialsHeading} cc-fs-300`}>Материалы</h4>
                            <div className={`${classes.itemOverview__materialsWrapper} cc-flex cc-gap-5`}>
                                {materials.map((material, key) => (
                                    <MaterialPreview className={`${classes.itemOverview__material}`} data={material} key={key}/>
                                ))}
                            </div>
                        </div>
                        <div className={`${classes.itemOverview__additional} cc-grid cc-gap-4 cc-desktop-gap-7`}>
                            <h4 className={`${classes.itemOverview__additionalHeading} cc-fs-300`}>Срок изготовления и стоимость</h4>
                            <p className={`${classes.itemOverview__materialsParagraph}`}>{data.duration}, {data.cost}</p>
                        </div>
                        <div className={`${classes.itemOverview__buttonWrapper}`}>
                            <Button data={{variant: 'accent'}} onClick={() => console.log('congrats!')} semantic="button">Заказать проект</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};