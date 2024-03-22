import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsDisplay.module.scss';
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {materials} from "@/widgets/material/api";
import {HomeMaterial} from "@/entities/material/ui/home-material/HomeMaterial";
import {Carousel, MoreLink} from "@/shared/ui";
import {getImage} from "@/shared/api";

interface MaterialsDisplayProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const MaterialsDisplay: FC<MaterialsDisplayProps> = ({className, ...props}: MaterialsDisplayProps) => {
    const width = useDocumentSize().x;
    const items = materials.map((material, key) => (
        <HomeMaterial className="cc-min-height-1of1" data={{
            ...material,
            image: getImage(material.imageId),
            button: <MoreLink to={`/materials${material.hrefPostfix}`}>Подробнее</MoreLink>
        }} key={key}/>
    ));

    const button = <div className={`${classes.materialsDisplay__buttonWrapper} cc-pt-7 cc-laptop-pt-10`}>
        <MoreLink className={`${classes.materialsDisplay__button}`} to="/materials">Подробнее обо всех материалах</MoreLink>
    </div>;

    const heading = <div className={`${classes.materialsDisplay__head} cc-grid cc-gap-2 cc-laptop-pb-7 cc-laptop-flex`}>
        <h2 className={`${classes.materialsDisplay__heading}`}>Материалы</h2>
        <div className={`${classes.materialsDisplay__descriptor}`}>Соблюдаем баланс цена-качество</div>
    </div>;

    return (
        <div className={`${classes.materialsDisplay__wrapper} ${className}`} {...props}>
            <div className={`${classes.materialsDisplay__content}`}>
                {width >= breakpoints.laptop
                    ? <div className="cc-main-gutter">
                         <div className={`${classes.materialsDisplay__gridWrapper} cc-grid cc-main-gutter-content`}>
                             {heading}
                             <div className={`${classes.materialsDisplay__grid} cc-grid cc-gap-5`}>{items}</div>
                             {button}
                        </div>
                    </div>
                    : <Carousel className={`${classes.materialsDisplay__carousel}`} data={{
                        title: heading,
                        button: button,
                        indicators: true
                    }} id="materials1" itemClass={`${classes.materialsDisplay__carouselItem}`}>{items}</Carousel>
                }
            </div>
        </div>
    );
};