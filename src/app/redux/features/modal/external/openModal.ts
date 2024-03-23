import {ModalIdentifier, ModalState, WindowParams} from "../types";
import {excludeItem, getAffectedWindow} from "./utilities";
import {closeAllModals} from "./closeAllModals";
import {switchClass, switchLayer, switchScroll} from "./switchLayer";
import {closeModal} from "./closeModal";

export const openModal = (state: ModalState, payload: ModalIdentifier) => {
    const window = getAffectedWindow(state.inactiveWindows, payload);
    if (!window) return;

    window.isOverlapping
        ? closeAllOverlapping(state)
        : closeAllModals(state);

    tryEnableModal(state, payload);
}

const tryEnableModal = (state: ModalState, payload: ModalIdentifier) => {
    const window = getAffectedWindow(state.inactiveWindows, payload);
    if (!window) return;

    if(!switchLayer(true, window)) return;
    if(window.hiddenClass) switchClass(window, false);
    enableModal(state, window);
    switchScroll(false);
}

const enableModal = (state: ModalState, payload: WindowParams) => {
    state.inactiveWindows = excludeItem(state.inactiveWindows, payload);
    state.activeWindows.push(payload);
}

const closeAllOverlapping = (state: ModalState) => {
    const windows = state.activeWindows;

    for (let i = 0; i < windows.length; i++)
        if (!windows[i].isOverlapping) closeModal(state, windows[i]);
}