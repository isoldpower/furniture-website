import {ModalState, WindowParams} from "../types";
import {excludeItem, getAffectedWindow} from "./utilities";
import {closeAllModals} from "./closeAllModals";
import {switchClass, switchLayer} from "./switchLayer";
import {closeModal} from "./closeModal";

export const openModal = (state: ModalState, payload: WindowParams) => {
    payload.isOverlapping
        ? closeAllOverlapping(state)
        : closeAllModals(state);

    tryEnableModal(state, payload);
}

const tryEnableModal = (state: ModalState, payload: WindowParams) => {
    if (!getAffectedWindow(state.inactiveWindows, payload)) return;

    if(!switchLayer(true, payload)) return;
    if(payload.hiddenClass) switchClass(payload, false);
    enableModal(state, payload);
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