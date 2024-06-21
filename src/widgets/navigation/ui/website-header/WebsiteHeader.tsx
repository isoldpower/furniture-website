import {FC, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './WebsiteHeader.module.scss';

import {Header} from "@/entities/navigation";
import {useHamburger, OpenCatalog, HideHeader} from "@/features/navigation";

import {AdaptiveLink} from "@/shared/ui-toolkit";
import {Menu} from "@/shared/icons";
import {navigationElements} from "../../config";

export const WebsiteHeader: FC = () => {
    const hamburger = useHamburger();
    const button = useRef(
        <button className={`${classes.websiteHeader__hamburgerButton}`} onClick={hamburger.toggle} type='button'>
            <Menu aria-selected={hamburger.isActive} className={`${classes.websiteHeader__hamburgerIcon}`}
                  height={44} width={44}/>
        </button>
    );

    return (
        <HideHeader>
            <Header active={hamburger.isActive} hamburger={button.current} navigation={[
                    <OpenCatalog key={0}>Каталог</OpenCatalog>,
                    ...navigationElements.map((element, key) => (
                        <AdaptiveLink className={`${classes.websiteHeader__navigationItem}`} key={key} to={element.href}>
                            {element.text}
                        </AdaptiveLink>
                    ))
                ]}
            />
        </HideHeader>
    );
};