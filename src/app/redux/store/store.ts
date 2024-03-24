import {configureStore} from "@reduxjs/toolkit/react";
import titleReducer from '../features/title/titleSlice';
import modalReducer from '../features/modal/modalSlice';
import galleryReducer from '../features/gallery/gallerySlice';

export const store = configureStore({
    reducer: {
        title: titleReducer,
        modal: modalReducer,
        gallery: galleryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;