import {adjustElements, getChildren} from "../../lib/utils";
import {Range} from '../index';

export const getRange = (group: HTMLElement, startingChild?: number, vertical?: boolean): Range => {
    const elements = getChildren<HTMLElement>(group);
    const adjustedElements = adjustElements(elements);

    return getFittingElements(group, adjustedElements, startingChild - 1, vertical);
}

const getFittingElements = (group: HTMLElement, elements: HTMLElement[], startingIndex: number, vertical?: boolean): Range => {
    const result: Range = {firstIncluded: startingIndex + 1, lastIncluded: startingIndex + 1};

    const forwardIterationResult = iterateForward(group, elements, 0, startingIndex, vertical);
    result.lastIncluded = forwardIterationResult.end;

    if (result.lastIncluded === elements.length)
        result.firstIncluded = iterateBackward(group, elements, forwardIterationResult.sum, startingIndex, vertical).start;

    return result
}

const iterateForward = (group: HTMLElement, elements: HTMLElement[], startingSum: number, startingIndex: number, vertical?: boolean): {end: number, sum: number} => {
    const error = elements.length;

    for (let i = startingIndex; i < elements.length; i++) {
        const elementSize = vertical ? elements[i].offsetHeight : elements[i].offsetWidth;
        const groupSize = vertical ? group.offsetHeight : group.offsetWidth;
        startingSum += elementSize;
        console.log(elementSize, '/', groupSize);

        if (startingSum - error > groupSize) {
            return {end: i, sum: startingSum - elementSize};
        }
    }

    return {end: elements.length, sum: startingSum};
}

const iterateBackward = (group: HTMLElement, elements: HTMLElement[], startingSum: number, startingIndex: number, vertical?: boolean): {start: number, sum: number} => {
    const error = elements.length;

    for (let i = startingIndex - 1; i >= 0; i--) {
        const elementSize = vertical ? elements[i].clientHeight : elements[i].clientWidth;
        const groupSize = vertical ? group.clientHeight : group.clientWidth;
        startingSum += elementSize;

        if (startingSum - error > groupSize)
            return {start: i + 2, sum: startingSum - elementSize};
    }

    return {start: 1, sum: startingSum};
}