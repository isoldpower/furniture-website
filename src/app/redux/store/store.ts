import {configureStore} from "@reduxjs/toolkit/react";
import titleReducer from '../features/title/titleSlice';
import modalReducer from '../features/modal/modalSlice';
import headerReducer from '../features/header/headerSlice';

export const store = configureStore({
    reducer: {
        title: titleReducer,
        modal: modalReducer,
        header: headerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;