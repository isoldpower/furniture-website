import {closeSpecificModal} from "./closeSpecificModal";
import {openModal} from "./openModal";
import {ModalState, WindowParams} from "../types";
import {getActiveModalsLayer, getInactiveModalsLayer} from "@/app/constants/layers";

export const switchModal = (state: ModalState, payload: WindowParams) => {
    const activeSearch = getActiveModalsLayer().querySelector<HTMLElement>(`[${payload.attributeKey}='${payload.attributeValue}']`);
    const inactiveSearch = getInactiveModalsLayer().querySelector<HTMLElement>(`[${payload.attributeKey}='${payload.attributeValue}']`);

    if(activeSearch) closeSpecificModal(state, payload);
    else if (inactiveSearch) openModal(state, payload);
    else throw new Error('Trying to open modal that is not listed within modal layers');
}