import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsDisplay.module.scss';
import {HomeMaterial} from "@/entities/material/ui/home-material/HomeMaterial";
import {Carousel, MoreLink} from "@/shared/ui";
import {useGetAllMaterialsQuery} from "@/widgets/material";

interface MaterialsDisplayProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const MaterialsDisplay: FC<MaterialsDisplayProps> = ({className, ...props}: MaterialsDisplayProps) => {
    const {currentData : materials, isLoading, isError} = useGetAllMaterialsQuery();

    if(isLoading) return <div className="cc-fs-500">Идет загрузка...</div>
    else if (isError) return <div className="cc-fs-500">Ошибка :(</div>

    const items = materials.filter(material => material.important).map((material, key) => (
        <HomeMaterial className="cc-min-height-1of1" data={{
            ...material,
            button: <MoreLink to={`/materials#${material.href_postfix.replaceAll('/', '')}`}>Подробнее</MoreLink>
        }} key={key}/>
    ));

    return (
        <div className={`${classes.materialsDisplay__wrapper} ${className}`} {...props}>
            <div className={`${classes.materialsDisplay__content}`}>
                <div className="cc-main-gutter">
                    <div className={`${classes.materialsDisplay__gridWrapper} cc-main-gutter-content`}>
                        <div className={`${classes.materialsDisplay__head} cc-grid cc-gap-2 cc-laptop-pb-7 cc-laptop-flex`}>
                            <h2 className={`${classes.materialsDisplay__heading}`}>Материалы</h2>
                            <div className={`${classes.materialsDisplay__descriptor}`}>Соблюдаем баланс цена-качество</div>
                        </div>
                        <div className={`${classes.materialsDisplay__grid} cc-grid cc-gap-5`}>
                            {items}
                        </div>
                        <div className={`${classes.materialsDisplay__buttonWrapper} cc-pt-7 cc-laptop-pt-10`}>
                            <MoreLink className={`${classes.materialsDisplay__button}`} to="/materials">Подробнее обо всех материалах</MoreLink>
                        </div>
                    </div>
                </div>
                <Carousel className={`${classes.materialsDisplay__carousel}`} data={{
                    title: (
                        <div className={`${classes.materialsDisplay__head} cc-grid cc-gap-2 cc-laptop-pb-7 cc-laptop-flex`}>
                            <h2 className={`${classes.materialsDisplay__heading}`}>Материалы</h2>
                            <div className={`${classes.materialsDisplay__descriptor}`}>Соблюдаем баланс цена-качество</div>
                        </div>
                    ),
                    button: (
                        <div className={`${classes.materialsDisplay__buttonWrapper} cc-pt-7 cc-laptop-pt-10`}>
                            <MoreLink className={`${classes.materialsDisplay__button}`} to="/materials">Подробнее обо всех
                                материалах</MoreLink>
                        </div>
                    ),
                    indicators: true
                }} id="materials1" itemClass={`${classes.materialsDisplay__carouselItem}`}>{items}</Carousel>
            </div>
        </div>
    );
};