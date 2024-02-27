export interface WindowParams {
    attributeKey: string;
    attributeValue: string;
    hiddenClass?: string;
    isOverlapping?: boolean;
}

export interface ModalState {
    activeWindows: WindowParams[];
    inactiveWindows: WindowParams[];
}