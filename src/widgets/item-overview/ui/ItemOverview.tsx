import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ItemOverview.module.scss';
import {ImagesSlider} from "@/features/images-slider/ui/ImagesSlider";
import {ProductData} from "@/entities";

interface ItemOverviewProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProductData;
}

export const ItemOverview: FC<ItemOverviewProps> = ({className, data, ...props}: ItemOverviewProps) => {
    const heading = <h1 className={`${classes.itemOverview__heading}`}>{data.title}</h1>;
    const description = <div className={`${classes.itemOverview__body} cc-grid cc-gap-10`}>
        <div className={`${classes.itemOverview__description} cc-grid cc-gap-4 cc-desktop-gap-7`}>
            <h4 className={`${classes.itemOverview__descriptionHeading} cc-fs-300`}>Описание</h4>
            <p className={`${classes.itemOverview__descriptionParagraph}`}>Ламинированная древесно-стружечная плита,
                сокращенно ЛДСП – это плитный материал, который получают путем прессования ковра из смеси древесной
                стружки со смолами с последующим нанесением ламинирующего защитно-декоративного покрытия.</p>
        </div>
        <div className={`${classes.itemOverview__materials} cc-grid cc-gap-4 cc-desktop-gap-7`}>
            <h4 className={`${classes.itemOverview__materialsHeading} cc-fs-300`}>Материалы</h4>
            <p className={`${classes.itemOverview__materialsParagraph}`}>{data.materials}</p>
        </div>
        <div className={`${classes.itemOverview__materials} cc-grid cc-gap-4 cc-desktop-gap-7`}>
            <h4 className={`${classes.itemOverview__materialsHeading} cc-fs-300`}>Срок изготовления и стоимость</h4>
            <p className={`${classes.itemOverview__materialsParagraph}`}>{data.materials}</p>
        </div>
    </div>;

    return (
        <div className={`${classes.itemOverview__wrapper} ${className}`} {...props}>
            <div className={`${classes.itemOverview__content} cc-grid cc-rgap-9`}>
                <div className={`${classes.itemOverview__smallHeading}`}>
                    {heading}
                </div>
                <ImagesSlider className={`${classes.itemOverview__slider}`} data={data}/>
                <div className={`${classes.itemOverview__bodyWrapper} cc-flex cc-flex-col cc-gap-10`}>
                <div className={`${classes.itemOverview__largeHeading}`}>{heading}</div>
                    {description}
                </div>
            </div>
        </div>
    );
};