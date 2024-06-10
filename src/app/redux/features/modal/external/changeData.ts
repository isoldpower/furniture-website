import {ModalState} from "@/app/redux";
import {getAffectedWindow, ModalIdentifier} from "@/app/redux";

export const changeModalData = (state: ModalState, payload: [ModalIdentifier, object]) => {
    const allWindows = state.activeWindows.concat(state.inactiveWindows);
    const window = getAffectedWindow(allWindows, payload[0]);
    window.data = payload[1];
}