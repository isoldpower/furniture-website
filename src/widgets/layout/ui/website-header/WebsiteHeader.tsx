import {BaseHTMLAttributes, FC, useCallback, useEffect, useRef, useState} from "react";
import '@/app/scss/main.scss';
import classes from './WebsiteHeader.module.scss';
import {Menu} from "@/shared/icons";
import {Header} from "@/entities/layout";
import {websiteRoutes} from "@/shared/lib";
import {AdaptiveLink} from "@/shared/ui";
import {useTypedSelector} from "@/app/redux";
import {selectActive} from "@/app/redux/features/modal/modalSlice";
import {useHamburger} from "@/features/layout";
import {OpenCatalog} from "@/features/catalog-section";

interface WebsiteHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteHeader: FC<WebsiteHeaderProps> = ({style, ...props}: WebsiteHeaderProps) => {
    const hamburger = useHamburger();
    const [translateY, setTranslateY] = useState(0);
    const oldScrollY = useRef(0);
    const modals = useTypedSelector(selectActive);

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

    return (
        <Header className={`${classes.websiteHeader__wrapper}`} data={{
            isActive: hamburger.isActive,
            hamburger: <button className={`${classes.websiteHeader__hamburgerButton}`} onClick={hamburger.toggle} type='button'>
                <Menu aria-selected={hamburger.isActive} className={`${classes.websiteHeader__hamburgerIcon}`} height={44} width={44}/>
            </button>,
            navigationElements: [
                <OpenCatalog key={0}>Каталог</OpenCatalog>,
                <AdaptiveLink className={`${classes.websiteHeader__navigationItem}`} key={1} to={websiteRoutes.materials}>
                        Материалы
                </AdaptiveLink>,
                <AdaptiveLink className={`${classes.websiteHeader__navigationItem}`} key={2} to={websiteRoutes.portfolio}>
                        Портфолио
                </AdaptiveLink>,
                <AdaptiveLink className={`${classes.websiteHeader__navigationItem}`} key={3} to={websiteRoutes.about}>
                        О компании
                </AdaptiveLink>
            ]
        }} style={{transform: `translateY(${translateY}px)`, ...style}} {...props} />
    );
};