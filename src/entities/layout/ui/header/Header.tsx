import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Header.module.scss';
import {Icon, Logo} from "@/shared/icons";
import {websiteRoutes} from "@/shared/lib";
import {AdaptiveLink} from "@/shared/ui";
import {useSettings} from "@/app/static";

interface HeaderData {
    navigationElements: ReactNode[];
    hamburger: ReactNode;
    isActive: boolean;
}

interface HeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: HeaderData;
}

export const Header: FC<HeaderProps> = ({className, data, ...props}: HeaderProps) => {
    const settings = useSettings();

    return (
        <header className={`${classes.header__wrapper} ${className} cc-px-4 cc-pt-2`} {...props}>
            <div className={`${classes.header__content} cc-px-4 cc-width-1of1 cc-border-radius-1`}>
                <div aria-selected={data.isActive} className={`${classes.header__back} cc-border-radius-1`} />
                <div className={`${classes.header__logoWrapper} cc-flex cc-align-items-center`}>
                    <AdaptiveLink className={`${classes.header__logo} cc-flex cc-align-items-center cc-gap-2`} to={websiteRoutes.home}>
                        <Icon className={`${classes.header__logoIcon}`} />
                        <Logo className={`${classes.header__logoText}`} height={28} width={148} />
                    </AdaptiveLink>
                    <div className={`${classes.header__descriptor} cc-fs-100 cc-grid cc-pl-4`}>
                        Качественная мебель
                        <span>в Санкт-Петербурге</span>
                    </div>
                </div>
                <nav className={`${classes.header__navigationWrapper}`}>
                    <ul className={`${classes.header__navigationList} cc-flex cc-align-items-center cc-gap-9`}>
                        {data.navigationElements.map((element, key) => (
                            <li className={`${classes.header__navigationItem}`} key={key}>{element}</li>
                        ))}
                    </ul>
                </nav>
                <address className={`${classes.header__phoneNumber} cc-clr-accent-500`}>{settings.safeData('FIRM_NUMBER')}</address>
                <div className={`${classes.header__hamburgerButton}`}>{data.hamburger}</div>
            </div>
        </header>
    );
};