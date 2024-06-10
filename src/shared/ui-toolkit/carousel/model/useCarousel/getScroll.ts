import {adjustElements, getChildren} from "../../lib/utils";

export const getScroll = (group: HTMLElement, firstActive: number, vertical?: boolean): number => {
    const children = getChildren<HTMLElement>(group);
    const adjustedElements = adjustElements(children);

    let sum: number = 0;
    for (let i = 0; i < firstActive - 1; i++)
        sum += vertical ? adjustedElements[i].offsetHeight : adjustedElements[i].offsetWidth;

    return sum;
}