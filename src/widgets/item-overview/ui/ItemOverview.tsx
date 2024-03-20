import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ItemOverview.module.scss';
import {ImagesSlider} from "@/features/images-slider/ui/ImagesSlider";
import {ProductData} from "@/entities";

interface ItemOverviewProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: ProductData;
}

export const ItemOverview: FC<ItemOverviewProps> = ({className, data, ...props}: ItemOverviewProps) => {
    return (
        <div className={`${classes.itemOverview__wrapper} ${className}`} {...props}>
            <div className={`${classes.itemOverview__content} cc-grid cc-gap-10`}>
                <div className={`${classes.itemOverview__headingWrapper} cc-main-gutter`}>
                    <h1 className={`${classes.itemOverview__heading} cc-main-gutter-content`}>{data.title}</h1>
                </div>
                <ImagesSlider className={`${classes.itemOverview__slider}`} data={data} />
            </div>
        </div>
    );
};