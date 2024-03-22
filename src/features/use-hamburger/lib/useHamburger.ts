import {selectActive, setActive, switchActive, useAppDispatch, useTypedSelector} from "@/app/redux";
import {useLocation} from "react-router-dom";
import {useCallback, useEffect} from "react";
import {breakpoints, useDocumentSize} from "@/shared/lib";

export const useHamburger = () => {
    const dispatch = useAppDispatch();
    const width = useDocumentSize().x;
    const isActive = useTypedSelector(selectActive);
    const location = useLocation();

    const open = useCallback(() => {
        dispatch(setActive(true));
    }, [dispatch]);

    const close = useCallback(() => {
        dispatch(setActive(false));
    }, [dispatch]);

    const toggle = useCallback(() => {
        dispatch(switchActive());
    }, [dispatch]);

    useEffect(() => {
        close();
    }, [close, location]);

    useEffect(() => {
        if (width >= breakpoints.laptop) close();
    }, [close, width]);

    return {open, close, toggle, isActive};
}