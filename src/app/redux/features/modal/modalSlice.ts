import {createSlice, PayloadAction} from "@reduxjs/toolkit/react";
import {ModalIdentifier, ModalState, WindowParams} from "./types";
import {closeSpecificModal} from "./external/closeSpecificModal";
import {closeAllModals} from "./external/closeAllModals";
import {openModal} from "./external/openModal";
import {switchModal} from "./external/switchModal";
import {changeModalData} from "./external/changeData";
import {addWindowToTrack, removeWindowFromTrack} from "./external/windowTrack";

const initialState: ModalState = {
    activeWindows: [],
    inactiveWindows: []
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        addToTrack: (state: ModalState, action: PayloadAction<WindowParams>) => addWindowToTrack(state, action.payload),
        removeFromTrack: (state: ModalState, action: PayloadAction<WindowParams>) => removeWindowFromTrack(state, action.payload),
        closeWindow: (state: ModalState, action: PayloadAction<ModalIdentifier>) => closeSpecificModal(state, action.payload),
        closeAll: (state: ModalState) => closeAllModals(state),
        openWindow: (state: ModalState, action: PayloadAction<ModalIdentifier>) => openModal(state, action.payload),
        switchWindow: (state: ModalState, action: PayloadAction<ModalIdentifier>) => switchModal(state, action.payload),
        changeData: (state: ModalState, action: PayloadAction<[ModalIdentifier, object]>) => changeModalData(state, action.payload)
    },
    selectors: {
        selectAllWindows: sliceState => sliceState.activeWindows.concat(sliceState.inactiveWindows),
        selectActive: sliceState => sliceState.activeWindows,
        selectIsActive: (sliceState, identifiers: ModalIdentifier[]) => {
            return identifiers.map(identifier => {
                const window = sliceState.activeWindows
                    .find(window => window.identifier === identifier);

                return window !== undefined;
            }).includes(true);
        },
        selectData: (sliceState, identifier: ModalIdentifier) => {
            const allWindows = sliceState.activeWindows.concat(sliceState.inactiveWindows);
            return allWindows.find(window => window.identifier === identifier)?.data;
        }
    }
});


export const {selectData, selectActive, selectIsActive, selectAllWindows} = modalSlice.selectors;
export const {changeData, closeWindow, closeAll, openWindow, switchWindow, removeFromTrack, addToTrack} = modalSlice.actions;
export default modalSlice.reducer;