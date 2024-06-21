import {FC, ReactElement, useCallback, useEffect, useRef, useState} from "react";
import '@/app/scss/main.scss';
import classes from './HideHeader.module.scss';
import {selectActive, useTypedSelector} from "@/app/redux";

interface HideHeaderProps {
    children: ReactElement;
}

export const HideHeader: FC<HideHeaderProps> = ({children}: HideHeaderProps) => {
    const modals = useTypedSelector(selectActive);
    const [translateY, setTranslateY] = useState(0);
    const oldScrollY = useRef(0);

    const handleScroll = useCallback(() => {
        const deltaScroll = oldScrollY.current - window.scrollY;
        setTranslateY(current => {
            if (current + deltaScroll > 0) return 0;
            else if (current + deltaScroll < -100) return -100;
            return current + deltaScroll;
        });

        oldScrollY.current = window.scrollY;
    }, [])

    useEffect(() => {
        if (modals.length > 0) setTranslateY(0);
    }, [modals]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return <div className={classes.websiteHeader__wrapper} style={{transform: `translateY(${translateY}px)`}}>
        {children}
    </div>;
};