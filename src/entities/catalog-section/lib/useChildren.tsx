import classes from "../ui/section-spoiler/SectionSpoiler.module.scss";
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {Fragment, ReactNode, useEffect, useState} from "react";

export const useChildren = (children: ReactNode[], sectionLink?: boolean) => {
    const width = useDocumentSize().x;
    const [amount, setAmount] = useState<number>(width >= breakpoints.desktop ? 4 : 3);
    useEffect(() => {
        let amountBuffer = width >= breakpoints.desktop ? 4 : 3;
        amountBuffer -= sectionLink && 1;
        setAmount(amountBuffer);
    }, [width, sectionLink]);

    return children.map((child, key) => {
        return key + 1 <= amount
            ? <div className={`${classes.catalogSpoiler__itemWrapper} cc-flex cc-width-1of1`} key={key}>{child}</div>
            : <Fragment key={key} />
    })
};