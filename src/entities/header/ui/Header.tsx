import {BaseHTMLAttributes, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Header.module.scss';
import {UseHamburgerType} from "@/features/use-hamburger/model";
import {Icon, Logo, Menu} from "@/shared/icons";
import {Link} from "react-router-dom";

interface HeaderData {
    useHamburger: UseHamburgerType;
    navigationElements: ReactNode[];
    switchHeader: () => void;
}

interface HeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data: HeaderData;
}

export const Header: FC<HeaderProps> = ({className, data, ...props}: HeaderProps) => {
    return (
        <header className={`${classes.header__wrapper} ${className} cc-px-4 cc-pt-3`} {...props}>
            <div className={`${classes.header__content} cc-px-4 cc-width-1of1 cc-border-radius-1`}>
                <div className={`${classes.header__logoWrapper} cc-flex cc-align-items-center`}>
                    <Link to={'/'} className={`${classes.header__logo} cc-flex cc-align-items-center cc-gap-2`}>
                        <Icon className={`${classes.header__logoIcon}`} />
                        <Logo width={148} height={28} className={`${classes.header__logoText}`} />
                    </Link>
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
                <address className={`${classes.header__phoneNumber} cc-clr-accent-500`}>+7 999 123-34-54</address>
                <button onClick={data.switchHeader} className={`${classes.header__hamburgerButton}`}>
                    <Menu width={44} height={44} />
                </button>
            </div>
        </header>
    );
};