import {adjustElements, getChildren} from "../../lib/utils";

export const getScroll = (group: HTMLElement, firstActive: number): number => {
    const children = getChildren<HTMLElement>(group);
    const adjustedElements = adjustElements(children);

    let sum: number = 0;
    for (let i = 0; i < firstActive - 1; i++)
        sum += adjustedElements[i].offsetWidth;

    return sum;
}