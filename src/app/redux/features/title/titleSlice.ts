import {createSlice, PayloadAction} from "@reduxjs/toolkit/react";
import {TitleRequest, TitleState} from "./types";
import {evaluateTitle, safeAddTitle} from "./external";

const initialState: TitleState = {
    globalPrefix: 'dy/dx',
    defaultTitle: 'Онлайн-школа математики',
    titleStack: []
}

export const titleSlice = createSlice({
    name: 'title',
    initialState: initialState,
    selectors: {
        selectTitle: sliceState => evaluateTitle(sliceState),
    },
    reducers: {
        addTitle: (state: TitleState, action: PayloadAction<TitleRequest>) => {
            safeAddTitle(state, action);
        },
        removeTitle: (state: TitleState, action: PayloadAction<TitleRequest>) => {
            state.titleStack.splice(state.titleStack.indexOf(action.payload), 1);
        },
        clearStack: (state: TitleState) => {
            state.titleStack = [];
        },
        changePrefix: (state: TitleState, action: PayloadAction<string>) => {
            state.globalPrefix = action.payload;
        }
    }
})

export const {selectTitle} = titleSlice.selectors;
export const {addTitle, removeTitle, clearStack, changePrefix} = titleSlice.actions;
export default titleSlice.reducer;