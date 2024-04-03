import {PayloadAction} from "@reduxjs/toolkit/react";
import {TitleRequest, TitleState} from "../types";

export const safeAddTitle = (state: TitleState, action: PayloadAction<TitleRequest>) => {
    const previous = state.titleStack.find(element => element.title === action.payload.title);
    previous
        ? previous.priority = action.payload.priority
        : state.titleStack = sortedPush(state.titleStack, action.payload);
}

function sortedPush(collection: TitleRequest[], element: TitleRequest) {
    const index = findInsertIndex(collection, element);
    return pushAtIndex(collection, element, index);
}

function findInsertIndex(collection: TitleRequest[], element: TitleRequest) {
    let insertIndex = 0;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].priority <= element.priority) insertIndex = i + 1;
    }

    return insertIndex;
}

function pushAtIndex<T>(collection: T[], element: T, index: number) {
    return [
        ...collection.slice(0, index),
        element,
        ...collection.slice(index)
    ];
}