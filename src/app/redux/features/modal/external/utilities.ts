import {ModalIdentifier, WindowParams} from "../types";

export const getAffectedWindow = (collection: WindowParams[], element: ModalIdentifier): WindowParams => {
    return collection.find(iterator => iterator.identifier === element);
}

export const isEqual = (first: WindowParams, second: WindowParams): boolean => {
    const element = getElement(first.attributeKey, first.attributeValue);
    const secondElement = getElement(second.attributeKey, second.attributeValue);

    if(element == null || secondElement == null) return false;
    return element.isEqualNode(secondElement);
}

export const getElement = (key: string, value: string) => {
    return document.querySelector<HTMLElement>(`[${key}='${value}']`)
}

export const excludeItem = (windows: WindowParams[], modal: WindowParams) => {
    return windows.filter(window => !isEqual(window, modal));
}