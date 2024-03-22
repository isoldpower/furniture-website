import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './WebsiteHeader.module.scss';
import {NavLink} from "react-router-dom";
import {OpenCatalog, useHamburger} from "@/features";
import {Menu} from "@/shared/icons";
import {Header} from "@/entities/layout";
import {websiteRoutes} from "@/shared/lib";

interface WebsiteHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteHeader: FC<WebsiteHeaderProps> = ({...props}: WebsiteHeaderProps) => {
    const hamburger = useHamburger();

    return (
        <Header className={`${classes.websiteHeader__wrapper}`} data={{
            isActive: hamburger.isActive,
            hamburger: <button className={`${classes.websiteHeader__hamburgerButton}`} onClick={hamburger.toggle} type='button'>
                <Menu height={44} width={44} className={`${classes.websiteHeader__hamburgerIcon}`} aria-selected={hamburger.isActive}/>
            </button>,
            navigationElements: [
                <OpenCatalog key={0}>Каталог</OpenCatalog>,
                <NavLink className={`${classes.websiteHeader__navigationItem}`} key={1} to={websiteRoutes.materials}>
                    <div tabIndex={0}>
                        Материалы
                    </div>
                </NavLink>,
                <NavLink className={`${classes.websiteHeader__navigationItem}`} key={2} to='/portfolio'>
                    <div tabIndex={0}>
                        Портфолио
                    </div>
                </NavLink>,
                <NavLink className={`${classes.websiteHeader__navigationItem}`} key={3} to='/about'>
                    <div tabIndex={0}>
                        О компании
                    </div>
                </NavLink>
            ]
        }} {...props} />
    );
};