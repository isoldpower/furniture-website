import {TitleRequest, TitleState} from "../types";

export const evaluateTitle = (state: TitleState) => {
    const prefix = state.globalPrefix;
    const prioritizedTitle = getPrioritizedTitle(state.titleStack, state.defaultTitle);

    return prefix.concat(' | ', prioritizedTitle);
}

function getPrioritizedTitle(titleStack: TitleRequest[], defaultTitle: string) {
    if (titleStack.length === 0) return defaultTitle;

    let highestElement = titleStack[0];
    for (let i = 0; i < titleStack.length; i++) {
        if (highestElement.priority < titleStack[i].priority) highestElement = titleStack[i];
    }

    return highestElement.title;
}