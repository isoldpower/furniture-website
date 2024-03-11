export const layers = {
    activeModals: 'active-modals',
    inactiveModals: 'inactive-modals',
    body: 'document-body'
}

export const getActiveModalsLayer = <T extends Element>() => document.querySelector<T>(`#${layers.activeModals}`);
export const getInactiveModalsLayer = <T extends Element>() => document.querySelector<T>(`#${layers.inactiveModals}`);
export const getBody = <T extends Element>() => document.querySelector<T>(`body`);