export interface WindowParams {
    identifier: ModalIdentifier;
    attributeKey: string;
    attributeValue: string;
    hiddenClass?: string;
    isOverlapping?: boolean;
}

export interface ModalState {
    activeWindows: WindowParams[];
    inactiveWindows: WindowParams[];
}

export type ModalIdentifier = 'header' | 'catalog';