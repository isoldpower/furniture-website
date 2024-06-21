import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './HomeMaterialsGrid.module.scss';
import {MoreLink} from "@/shared/ui-toolkit";

type HomeMaterialsGridProps = {
    children: ReactNode;
}

export const HomeMaterialsGrid: FC<HomeMaterialsGridProps> = ({children}: HomeMaterialsGridProps) => {
    return (
        <div className={`${classes.materialsDisplay__gridWrapper} cc-grid`}>
            <div
                className={`${classes.materialsDisplay__head} cc-grid cc-gap-2 cc-laptop-pb-7 cc-laptop-flex`}>
                <h2 className={`${classes.materialsDisplay__heading}`}>Материалы</h2>
                <div className={`${classes.materialsDisplay__descriptor}`}>Соблюдаем баланс цена-качество</div>
            </div>
            <div className={`${classes.materialsDisplay__grid} cc-grid cc-gap-5`}>
                {children}
            </div>
            <div className={`${classes.materialsDisplay__buttonWrapper} cc-pt-7 cc-laptop-pt-10`}>
                <MoreLink className={`${classes.materialsDisplay__button}`} to="/materials">Подробнее обо всех
                    материалах</MoreLink>
            </div>
        </div>
    );
};