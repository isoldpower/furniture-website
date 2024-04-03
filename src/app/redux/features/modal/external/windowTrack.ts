import {ModalState, WindowParams} from "../types";
import {excludeItem, getAffectedWindow} from "./utilities";
import {getActiveModalsLayer, getInactiveModalsLayer} from "@/shared/lib/constants/layers";

export const addWindowToTrack = (state: ModalState, payload: WindowParams) => {
    if(getAffectedWindow(state.inactiveWindows, payload.identifier) || getAffectedWindow(state.activeWindows, payload.identifier)) return;
    const activeSearchResult = getActiveModalsLayer().querySelector(`[${payload.attributeKey}='${payload.attributeValue}']`);
    const inactiveSearchResult = getInactiveModalsLayer().querySelector(`[${payload.attributeKey}='${payload.attributeValue}']`);

    if(activeSearchResult) state.activeWindows.push(payload);
    else if(inactiveSearchResult) state.inactiveWindows.push(payload);
    else throw new Error('Tried to track a window that is not listed within modal layers');
}

export const removeWindowFromTrack = (state: ModalState, payload: WindowParams) => {
    if(getAffectedWindow(state.activeWindows, payload.identifier)) state.activeWindows = excludeItem(state.activeWindows, payload);
    else if(getAffectedWindow(state.inactiveWindows, payload.identifier)) state.inactiveWindows = excludeItem(state.inactiveWindows, payload);
}