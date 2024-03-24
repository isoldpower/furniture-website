import {configureStore} from "@reduxjs/toolkit/react";
import titleReducer from '../features/title/titleSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        title: titleReducer,
        modal: modalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;