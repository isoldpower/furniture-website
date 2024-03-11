import {adjustElements, getChildren} from "./utils";
import {Range} from '../model';

export const getRange = (group: HTMLElement, startingChild?: number): Range => {
    const elements = getChildren<HTMLElement>(group);
    const adjustedElements = adjustElements(elements);

    return getFittingElements(group, adjustedElements, startingChild - 1);
}

const getFittingElements = (group: HTMLElement, elements: HTMLElement[], startingIndex: number): Range => {
    const result: Range = {firstIncluded: startingIndex + 1, lastIncluded: startingIndex + 1};

    const forwardIterationResult = iterateForward(group, elements, 0, startingIndex);
    result.lastIncluded = forwardIterationResult.end;

    if (result.lastIncluded === elements.length)
        result.firstIncluded = iterateBackward(group, elements, forwardIterationResult.sum, startingIndex).start;

    return result
}

const iterateForward = (group: HTMLElement, elements: HTMLElement[], startingSum: number, startingIndex: number): {end: number, sum: number} => {
    const error = elements.length;

    for (let i = startingIndex; i < elements.length; i++) {
        startingSum += elements[i].clientWidth;
        if (startingSum - error > group.clientWidth) {
            return {end: i, sum: startingSum - elements[i].clientWidth};
        }
    }

    return {end: elements.length, sum: startingSum};
}

const iterateBackward = (group: HTMLElement, elements: HTMLElement[], startingSum: number, startingIndex: number): {start: number, sum: number} => {
    const error = elements.length;

    for (let i = startingIndex - 1; i >= 0; i--) {
        startingSum += elements[i].clientWidth;
        if (startingSum - error > group.clientWidth)
            return {start: i + 2, sum: startingSum - elements[i].clientWidth};
    }

    return {start: 1, sum: startingSum};
}