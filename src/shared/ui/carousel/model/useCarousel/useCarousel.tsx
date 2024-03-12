import {ReactNode, useEffect, useState} from "react";
import {Range} from "../types";
import {getRange} from "./getRange";
import {getScroll} from './getScroll';
import {useDocumentSize} from "@/shared/lib";

export const useCarousel = (children: ReactNode[], groupId: string) => {
    const [firstElement, setFirstElement] = useState<number>(1);
    const [currentRange, setCurrentRange] = useState<Range>({firstIncluded: 1, lastIncluded: 1});
    const windowSize = useDocumentSize();

    useEffect(() => {
        const group = document.querySelector<HTMLElement>(`#${groupId}`);
        const range = getRange(group, firstElement);
        setCurrentRange(range);
    }, [firstElement, groupId, windowSize]);

    useEffect(() => {
        const group = document.querySelector<HTMLElement>(`#${groupId}`);
        const scrollX = getScroll(group, currentRange.firstIncluded).toString();
        group.style.transform = `translateX(-${scrollX}px)`;
    }, [groupId, currentRange]);

    const setNextPage = () => {
        setFirstElement(Math.min(children.length, currentRange.lastIncluded + 1));
    }

    const setPreviousPage = () => {
        const possibleFirst = currentRange.firstIncluded - (currentRange.lastIncluded - currentRange.firstIncluded + 1);
        setFirstElement(Math.max(1, possibleFirst));
    }

    return {setNextPage, setPreviousPage, currentRange};
}