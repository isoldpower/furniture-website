import {Dispatch, SetStateAction, useLayoutEffect, useState} from "react";

interface Coordinates {
    x: number;
    y: number;
}

export function useDocumentSize(): Coordinates {
    const [size, setSize] = useState<Coordinates>({
        x: window.innerWidth,
        y: window.innerHeight
    });

    useLayoutEffect(() => {
        return onWindowResize(setSize);
    }, []);
    return size;
}

function onWindowResize(setSize: Dispatch<SetStateAction<Coordinates>>) {
    const updateSize = () => {
        setSize({
            x: window.innerWidth,
            y: window.innerHeight
        });
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
}