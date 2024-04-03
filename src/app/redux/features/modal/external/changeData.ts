import {ModalState} from "@/app/redux";
import {ModalIdentifier} from "@/app/redux/features/modal/types";
import {getAffectedWindow} from "@/app/redux/features/modal/external/utilities";

export const changeModalData = (state: ModalState, payload: [ModalIdentifier, object]) => {
    const allWindows = state.activeWindows.concat(state.inactiveWindows);
    const window = getAffectedWindow(allWindows, payload[0]);
    window.data = payload[1];
}