import {ModalIdentifier, ModalState} from "../types";
import {getAffectedWindow} from "./utilities";
import {closeModal} from "./closeModal";
import {switchScroll} from "./switchLayer";

export const closeSpecificModal = (state: ModalState, payload: ModalIdentifier) => {
    const affectedWindow = getAffectedWindow(state.activeWindows, payload);
    closeModal(state, affectedWindow);
    if(state.activeWindows.length === 0) switchScroll(true);
}