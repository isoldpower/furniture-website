import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './WebsiteHeader.module.scss';
import {OpenCatalog, useHamburger} from "@/features";
import {Menu} from "@/shared/icons";
import {Header} from "@/entities/layout";
import {websiteRoutes} from "@/shared/lib";
import {HashLink} from "react-router-hash-link";

interface WebsiteHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
}

export const WebsiteHeader: FC<WebsiteHeaderProps> = ({...props}: WebsiteHeaderProps) => {
    const hamburger = useHamburger();

    return (
        <Header className={`${classes.websiteHeader__wrapper}`} data={{
            isActive: hamburger.isActive,
            hamburger: <button className={`${classes.websiteHeader__hamburgerButton}`} onClick={hamburger.toggle} type='button'>
                <Menu aria-selected={hamburger.isActive} className={`${classes.websiteHeader__hamburgerIcon}`} height={44} width={44}/>
            </button>,
            navigationElements: [
                <OpenCatalog key={0}>Каталог</OpenCatalog>,
                <HashLink className={`${classes.websiteHeader__navigationItem}`} key={1} to={websiteRoutes.materials}>
                    <div tabIndex={0}>
                        Материалы
                    </div>
                </HashLink>,
                <HashLink className={`${classes.websiteHeader__navigationItem}`} key={2} to={websiteRoutes.portfolio}>
                    <div tabIndex={0}>
                        Портфолио
                    </div>
                </HashLink>,
                <HashLink className={`${classes.websiteHeader__navigationItem}`} key={3} to={websiteRoutes.about}>
                    <div tabIndex={0}>
                        О компании
                    </div>
                </HashLink>
            ]
        }} {...props} />
    );
};