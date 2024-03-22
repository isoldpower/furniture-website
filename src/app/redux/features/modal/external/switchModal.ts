import {closeSpecificModal} from "./closeSpecificModal";
import {openModal} from "./openModal";
import {ModalIdentifier, ModalState} from "../types";
import {getActiveModalsLayer, getInactiveModalsLayer} from "@/shared/lib/constants/layers";
import {getAffectedWindow} from "@/app/redux/features/modal/external/utilities";

export const switchModal = (state: ModalState, payload: ModalIdentifier) => {
    const allWindows = state.activeWindows.concat(state.inactiveWindows);
    const window = getAffectedWindow(allWindows, payload);
    const activeSearch = getActiveModalsLayer().querySelector<HTMLElement>(`[${window.attributeKey}='${window.attributeValue}']`);
    const inactiveSearch = getInactiveModalsLayer().querySelector<HTMLElement>(`[${window.attributeKey}='${window.attributeValue}']`);

    if(activeSearch) closeSpecificModal(state, payload);
    else if (inactiveSearch) openModal(state, payload);
    else throw new Error('Trying to open modal that is not listed within modal layers');
}