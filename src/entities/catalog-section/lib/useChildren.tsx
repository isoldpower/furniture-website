import classes from "../ui/section-spoiler/SectionSpoiler.module.scss";
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {Fragment, ReactNode} from "react";

export const useChildren = (children: ReactNode[]) => {
    const width = useDocumentSize().x;
    const amount = width >= breakpoints.desktop ? 3 : 2;

    return children.map((child, key) => {
        return key + 1 <= amount
            ? <div className={`${classes.catalogSpoiler__itemWrapper}`} key={key}>{child}</div>
            : <Fragment key={key} />
    })
};