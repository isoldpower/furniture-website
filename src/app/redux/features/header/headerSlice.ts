import {createSlice, PayloadAction} from "@reduxjs/toolkit/react";
import {HeaderState} from "./types";

const initialState: HeaderState = {
    isActive: false
}

export const headerSlice = createSlice({
    name: 'header',
    initialState: initialState,
    selectors: {
        selectActive: sliceState => sliceState.isActive,
    },
    reducers: {
        switchActive: (state: HeaderState) => {
            state.isActive = !state.isActive;
            return state;
        },
        setActive: (state: HeaderState, action: PayloadAction<boolean>) => {
            state.isActive = action.payload;
            return state;
        }
    }
});

export const {switchActive, setActive} = headerSlice.actions;
export const {selectActive} = headerSlice.selectors;
export default headerSlice.reducer;