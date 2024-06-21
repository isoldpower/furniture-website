import {FC, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './MaterialsDisplay.module.scss';
import {HomeMaterial, HomeMaterialsGrid} from "@/entities/material";
import {Carousel, MoreLink} from "@/shared/ui-toolkit";
import {useGetAllMaterialsQuery} from "@/widgets/material";
import {MaterialsDisplayFx} from "@/features/material";

export const MaterialsDisplay: FC = () => {
    const {...query} = useGetAllMaterialsQuery();

    const carouselButton = useRef(
        <div className={`${classes.materialsDisplay__buttonWrapper} cc-pt-7 cc-laptop-pt-10`}>
            <MoreLink className={`${classes.materialsDisplay__button}`} to="/materials">Подробнее обо всех
                материалах</MoreLink>
        </div>
    );

    const carouselTitle = useRef(
        <div className={`${classes.materialsDisplay__head} cc-grid cc-gap-2 cc-laptop-pb-7 cc-laptop-flex`}>
            <h2 className={`${classes.materialsDisplay__heading}`}>Материалы</h2>
            <div className={`${classes.materialsDisplay__descriptor}`}>Соблюдаем баланс цена-качество</div>
        </div>
    );

    const materialItems = query.currentData?.filter(material => material.important).map((material, key) => (
        <div className="cc-min-height-1of1" key={key}>
            <HomeMaterial
                button={<MoreLink to={`/materials#${material.href_postfix.replaceAll('/', '')}`}>Подробнее</MoreLink>}
                data={material}
            />
        </div>
    ));

    return (
        <MaterialsDisplayFx {...query}>
            <div className={`${classes.materialsDisplay__large}`}>
                <div className="cc-main-gutter">
                    <HomeMaterialsGrid>
                        {materialItems}
                    </HomeMaterialsGrid>
                </div>
            </div>
            <div className={classes.materialsDisplay__small}>
                <Carousel button={carouselButton.current} id="materials1" indicators title={carouselTitle.current}>
                    {materialItems?.map((materialItem, key) => (
                        <div className={`${classes.materialsDisplay__carouselItem}`} key={key}>
                            {materialItem}
                        </div>
                    ))}
                </Carousel>
            </div>
        </MaterialsDisplayFx>
    );
};