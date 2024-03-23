import {FC, useCallback, useEffect, useRef} from "react";
import '@/app/scss/main.scss';
import {useLocation} from "react-router-dom";

interface ScrollData {
    yOffset?: number;
}

export const AnchorScroll: FC<ScrollData> = ({yOffset}: ScrollData) => {
    const location = useLocation();
    const lastHash = useRef('');

    const proceedScroll = useCallback(() => {
        if ((!lastHash.current || !document.getElementById(lastHash.current)) && lastHash.current !== 'top') return;

        const initialScroll = document.getElementById(lastHash.current)?.getBoundingClientRect().top + window.scrollY;
        const finalScroll = lastHash.current === 'top' ? 0 : initialScroll + (yOffset ?? 0);

        window.scrollTo({top: finalScroll, behavior: 'smooth'});
        lastHash.current = '';
    }, [yOffset]);

    useEffect(() => {
        if (location.hash)
            lastHash.current = location.hash.slice(1);

        setTimeout(proceedScroll, 100);
    }, [location, proceedScroll]);

    return null;
};