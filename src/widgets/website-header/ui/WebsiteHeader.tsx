import {BaseHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './WebsiteHeader.module.scss';
import {Header} from "@/entities/header/ui/Header";
import {OpenCatalog} from "@/features/open-catalog/ui/OpenCatalog";
import {useHamburger} from "@/features/use-hamburger/lib/useHamburger";
import {NavLink} from "react-router-dom";
import {switchActive, useAppDispatch} from "@/app/redux";

interface WebsiteHeaderData {
}

interface WebsiteHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    data?: WebsiteHeaderData;
}

export const WebsiteHeader: FC<WebsiteHeaderProps> = ({className, data, ...props}: WebsiteHeaderProps) => {
    const dispatch = useAppDispatch();
    const switchHeader = () => dispatch(switchActive());

    return (
        <Header data={{
            useHamburger: useHamburger(),
            switchHeader: switchHeader,
            navigationElements: [
                <OpenCatalog>Каталог</OpenCatalog>,
                <NavLink to={'/materials'} className={`${classes.websiteHeader__navigationItem}`}>Материалы</NavLink>,
                <NavLink to={'/portfolio'} className={`${classes.websiteHeader__navigationItem}`}>Портфолио</NavLink>,
                <NavLink to={'/about'} className={`${classes.websiteHeader__navigationItem}`}>О компании</NavLink>
            ]
        }} {...props} />
    );
};