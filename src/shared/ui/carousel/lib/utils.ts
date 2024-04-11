export const getChildren = <T extends Element>(element: Element) => element.querySelectorAll<T>(':scope > *');
export const getChild = <T extends Element>(element: Element) => element.querySelector<T>(':scope > *');
export const adjustElements = (elements: NodeListOf<HTMLElement>) => {
    const resultingElements: HTMLElement[] = [];
    for (let i = 0; i < elements.length; i++) {
        getComputedStyle(elements[i]).display == 'contents'
            ? resultingElements.push(getChild(elements[i]))
            : resultingElements.push(elements[i])
    }

    return resultingElements;
}