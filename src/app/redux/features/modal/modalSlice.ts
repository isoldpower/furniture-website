import {createSlice, PayloadAction} from "@reduxjs/toolkit/react";
import {ModalIdentifier, ModalState, WindowParams} from "./types";
import {closeSpecificModal} from "./external/closeSpecificModal";
import {closeAllModals} from "./external/closeAllModals";
import {openModal} from "./external/openModal";
import {switchModal} from "./external/switchModal";
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
    },
    selectors: {
        selectActiveWindows: sliceState => sliceState.activeWindows
    }
});


export const {selectActiveWindows} = modalSlice.selectors;
export const {closeWindow, closeAll, openWindow, switchWindow, removeFromTrack, addToTrack} = modalSlice.actions;
export default modalSlice.reducer;