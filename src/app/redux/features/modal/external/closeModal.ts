import {ModalState, WindowParams} from "../types";
import {switchClass, switchLayer} from "./switchLayer";
import {excludeItem} from "./utilities";

export const closeModal = (state: ModalState, modal: WindowParams) => {
    if (modal == undefined) return;

    if(!switchLayer(false, modal)) return;
    if(modal.hiddenClass) switchClass(modal, true);
    state.activeWindows = excludeItem(state.activeWindows, modal);
    state.inactiveWindows.push(modal);
}