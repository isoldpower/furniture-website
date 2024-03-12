import classes from "@/entities/catalog-spoiler/ui/CatalogSpoiler.module.scss";
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {ReactNode} from "react";

export const useChildren = (children: ReactNode[]) => {
    const width = useDocumentSize().x;
    const amount = width >= breakpoints.desktop ? 3 : 2;

    return children.map((child, key) => {
        return key + 1 <= amount
            ? <div className={`${classes.catalogSpoiler__itemWrapper}`} key={key}>{child}</div>
            : <div className={`${classes.catalogSpoiler__invisible}`} key={key} />
    })
};