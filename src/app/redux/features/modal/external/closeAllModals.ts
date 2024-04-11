import {ModalState} from "../types";
import {closeModal} from "./closeModal";
import {switchScroll} from "./switchLayer";

export const closeAllModals = (state: ModalState) => {
    const windows = state.activeWindows;
    for (let i = 0; i < windows.length; i++)
        closeModal(state, windows[i]);

    switchScroll(true);
}