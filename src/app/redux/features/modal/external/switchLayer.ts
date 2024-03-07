import {WindowParams} from "../types";
import {getElement} from "./utilities";
import {getActiveModalsLayer, getBody, getInactiveModalsLayer} from "@/shared/constants/layers";

export const switchLayer = (isActive: boolean, window: WindowParams): boolean => {
    const activeParent = getActiveModalsLayer<HTMLElement>();
    const inactiveParent = getInactiveModalsLayer<HTMLElement>();

    const currentParent = isActive ? inactiveParent : activeParent;
    const element = currentParent.querySelector<HTMLElement>(`[${window.attributeKey}='${window.attributeValue}']`);
    const newParent = isActive ? activeParent : inactiveParent;
    newParent.append(element);

    return true;
}

export const switchScroll = (isActive: boolean) => {
    getBody<HTMLElement>().style.overflowY = isActive
        ? 'visible'
        : 'hidden';
}

export const switchClass = (window: WindowParams, isActive: boolean) => {
    const element = getElement(window.attributeKey, window.attributeValue);
    isActive
        ? element?.classList.add(window.hiddenClass)
        : element?.classList.remove(window.hiddenClass);
}