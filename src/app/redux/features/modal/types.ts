export interface WindowParams {
    identifier: ModalIdentifier;
    attributeKey: string;
    attributeValue: string;
    hiddenClass?: string;
    isOverlapping?: boolean;
    data?: object;
}

export interface ModalState {
    activeWindows: WindowParams[];
    inactiveWindows: WindowParams[];
}

export type ModalIdentifier = 'header' | 'catalog' | 'portfolio';