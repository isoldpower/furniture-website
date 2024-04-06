import {configureStore} from "@reduxjs/toolkit/react";
import titleReducer from '../features/title/titleSlice';
import modalReducer from '../features/modal/modalSlice';
import notificationReducer from "@/app/redux/features/notification/notificationSlice";
import globalApi from "@/app/redux/api/globalApi";

export const store = configureStore({
    reducer: {
        [globalApi.reducerPath]: globalApi.reducer,
        title: titleReducer,
        modal: modalReducer,
        notification: notificationReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(globalApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;