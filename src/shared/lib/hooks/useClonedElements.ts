import {cloneElement, ReactElement, useCallback, useMemo} from "react";

export const useClonedElements = <T> (element: ReactElement, dataArray: T[]) => {
    const getClone = useCallback((section: T, key: number) => {
        return cloneElement(element, {
            ...element.props,
            data: section,
            key
        });
    }, [element]);

    const getElements = useCallback(() => {
        return dataArray?.map((data, key) => getClone(data, key));
    }, [getClone, dataArray]);

    return useMemo(() => {
        return getElements();
    }, [getElements]);
}