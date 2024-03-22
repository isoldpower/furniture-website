import {closeWindow, openWindow, switchWindow, useAppDispatch, useTypedSelector} from "@/app/redux";
import {useLocation} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {breakpoints, useDocumentSize} from "@/shared/lib";
import {selectActiveWindows} from "@/app/redux/features/modal/modalSlice";

export const useHamburger = () => {
    const isActive = useTypedSelector(selectActiveWindows).find(window => window.identifier === 'header' || 'catalog') !== undefined;
    const dispatch = useAppDispatch();
    const width = useDocumentSize().x;
    const location = useLocation();

    const open = useCallback(() => {
        dispatch(openWindow('header'));
    }, [dispatch]);

    const close = useCallback(() => {
        dispatch(closeWindow('header'));
    }, [dispatch]);

    const toggle = useCallback(() => {
        dispatch(switchWindow('header'));
    }, [dispatch]);

    useEffect(() => {
        close();
    }, [close, location]);

    useEffect(() => {
        if (width >= breakpoints.laptop) close();
    }, [close, width]);

    return {open, close, toggle, isActive};
}