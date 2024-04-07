import {createSlice, PayloadAction} from "@reduxjs/toolkit/react";
import {Notification, NotificationState} from "@/app/redux/features/notification/types";

const initialState: NotificationState = {
    notification: undefined,
    idCounter: 0
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        addNotification: (state: NotificationState, action: PayloadAction<Notification>) => {
            state.notification = ({...action.payload, id: ++state.idCounter});
        },
        removeNotification: (state: NotificationState) => {
            state.notification = undefined;
        }
    },
    selectors: {
        selectNotification: (sliceState: NotificationState) => sliceState.notification
    }
})

export default notificationSlice.reducer;
export const {addNotification, removeNotification} = notificationSlice.actions;
export const {selectNotification} = notificationSlice.selectors;