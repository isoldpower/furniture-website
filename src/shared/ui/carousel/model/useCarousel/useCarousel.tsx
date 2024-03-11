import {ReactNode, useCallback, useEffect, useState} from "react";
import {Range} from "../types";
import {getRange, getScroll} from "../../lib";

export const useCarousel = (children: ReactNode[], groupId: string) => {
    let firstElement = 1;
    const [currentRange, setCurrentRange] = useState<Range>({firstIncluded: 1, lastIncluded: 1});

    const updateRange = useCallback(() => {
        const group = document.querySelector<HTMLElement>(`#${groupId}`);
        const range = getRange(group, firstElement);
        setCurrentRange(range);
    }, [firstElement, groupId]);

    useEffect(() => {
        updateRange();
    }, [updateRange]);

    useEffect(() => {
        const group = document.querySelector<HTMLElement>(`#${groupId}`);
        const scrollX = getScroll(group, currentRange.firstIncluded).toString();
        group.style.transform = `translateX(-${scrollX}px)`;
    }, [groupId, currentRange]);

    const setNextPage = () => {
        firstElement = Math.min(children.length - 1, currentRange.lastIncluded + 1);
        updateRange();
    }

    const setPreviousPage = () => {
        const possibleFirst = currentRange.firstIncluded - (currentRange.lastIncluded - currentRange.firstIncluded + 1);
        firstElement = Math.max(1, possibleFirst);
        updateRange();
    }

    return {setNextPage, setPreviousPage, updateRange, currentRange};
}