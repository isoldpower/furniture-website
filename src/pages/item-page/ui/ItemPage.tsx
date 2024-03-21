import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './ItemPage.module.scss';
import {useParams} from "react-router-dom";
import {products} from "@/shared/api";
import {PagePath} from "@/features";
import {ItemOverview} from "@/widgets/item-overview/ui/ItemOverview";

interface ItemPageProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const ItemPage: FC<ItemPageProps> = ({className, ...props}: ItemPageProps) => {
    const params = useParams();
    const sectionData = products.find(section => section.hrefPostfix === '/' + params.section);
    const product = sectionData.products.find(product => product.postfix === '/' + params.item);

    return (
        <div className={`${classes.itemPage__wrapper} ${className}`} {...props}>
            <div className={`${classes.itemPage__content}`}>
                <div className={`${classes.itemPage__pathWrapper} cc-main-gutter`}>
                    <div className={`${classes.itemPage__path} cc-main-gutter-content`}>
                        <PagePath />
                    </div>
                </div>
                <div className={`${classes.itemPage__itemWrapper} cc-main-gutter cc-pt-9 cc-laptop-pt-13`}>
                    <div className={`${classes.itemPage__item} cc-main-gutter-content`}>
                        <ItemOverview data={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};