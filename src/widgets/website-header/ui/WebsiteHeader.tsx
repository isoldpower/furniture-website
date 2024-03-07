import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './WebsiteHeader.module.scss';
import {Header} from "@/entities/header/ui/Header";
import {OpenCatalog} from "@/features/open-catalog/ui/OpenCatalog";
import {useHamburger} from "@/features/use-hamburger/lib/useHamburger";
import {NavLink} from "react-router-dom";
import {switchActive, useAppDispatch} from "@/app/redux";

interface WebsiteHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteHeader: FC<WebsiteHeaderProps> = ({...props}: WebsiteHeaderProps) => {
    const dispatch = useAppDispatch();

    return (
        <Header data={{
            useHamburger: useHamburger(),
            switchHeader: () => dispatch(switchActive()),
            navigationElements: [
                <OpenCatalog key={0}>Каталог</OpenCatalog>,
                <NavLink to={'/materials'} className={`${classes.websiteHeader__navigationItem}`} key={1}>
                    <div tabIndex={0}>
                        Материалы
                    </div>
                </NavLink>,
                <NavLink to={'/portfolio'} className={`${classes.websiteHeader__navigationItem}`} key={2}>
                    <div tabIndex={0}>
                        Портфолио
                    </div>
                </NavLink>,
                <NavLink to={'/about'} className={`${classes.websiteHeader__navigationItem}`} key={3}>
                    <div tabIndex={0}>
                        О компании
                    </div>
                </NavLink>
            ]
        }} {...props} />
    );
};