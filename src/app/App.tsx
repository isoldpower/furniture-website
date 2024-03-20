import classes from '@/app/App.module.scss';
import {Outlet, useLocation} from 'react-router-dom';
import {WebsiteHeader} from "@/widgets/website-header/ui/WebsiteHeader";
import {layers} from "@/shared/lib/constants/layers";
import {ProvideSideHeader} from "@/app/providers/modal/side-header/ProvideSideHeader";
import {SideHeader} from "@/widgets/side-header/ui/SideHeader";
import {WebsiteFooter} from "@/widgets/website-footer/ui/WebsiteFooter";
import {useEffect} from "react";

export const App = () => {
    const location = useLocation();
    useEffect(() => {
        scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <WebsiteHeader />
            <main id='body' style={{zIndex: 98, minHeight: '90dvh'}}>
                <div className="absolute-stretch" id={layers.inactiveModals} style={{position: 'fixed', zIndex: 99, visibility: 'hidden'}}>
                    <ProvideSideHeader id="side-header">
                        <SideHeader />
                    </ProvideSideHeader>
                </div>
                <div className={`${classes.pageLayout__activeModals} absolute-stretch`} id={layers.activeModals}
                     style={{position: "fixed", zIndex: 100}} />
                <div style={{zIndex: 97}}>
                    <Outlet/>
                </div>
            </main>
            <WebsiteFooter />
        </>
    );
};