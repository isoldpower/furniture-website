import {useCallback, useEffect, useState} from "react";
import {Range} from "../types";
import {getRange} from "./getRange";
import {getScroll} from './getScroll';
import {useDocumentSize} from "@/shared/lib";

export const useCarousel = (length: number, groupId: string, vertical?: boolean) => {
    const windowSize = useDocumentSize().x;
    const [firstElement, setFirstElement] = useState<number>(1);
    const [currentRange, setCurrentRange] = useState<Range>({firstIncluded: 1, lastIncluded: 1});

    const updateRange = useCallback(() => {
        const group = document.querySelector<HTMLElement>(`#${groupId}`);
        if (!group) return;

        const range = getRange(group, firstElement, vertical);
        setCurrentRange(range);
    }, [vertical, firstElement, groupId]);

    const changeTransform = useCallback(() => {
        const group = document.querySelector<HTMLElement>(`#${groupId}`);
        if (!group) return;

        const scroll = getScroll(group, currentRange.firstIncluded, vertical);
        if(vertical) group.style.transform = `translateY(-${scroll}px)`;
        else group.style.transform = `translateX(-${scroll}px)`;
    }, [vertical, groupId, currentRange]);

    useEffect(() => {
        setTimeout(() => updateRange(), 10);
    }, [updateRange, windowSize]);

    useEffect(() => {
        changeTransform();
    }, [changeTransform]);

    const setNextPage = () => {
        setFirstElement(Math.min(length, currentRange.lastIncluded + 1));
    }

    const setPreviousPage = () => {
        const possibleFirst = currentRange.firstIncluded - (currentRange.lastIncluded - currentRange.firstIncluded + 1);
        setFirstElement(Math.max(1, possibleFirst));
    }

    return {setNextPage, setPreviousPage, currentRange};
}