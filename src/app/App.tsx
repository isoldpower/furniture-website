import classes from '@/app/App.module.scss';
import {Outlet, useLocation} from 'react-router-dom';
import {layers} from "@/shared/lib/constants/layers";
import {ProvideSideHeader} from "@/app/providers/modal/side-header/ProvideSideHeader";
import {useEffect} from "react";
import {WebsiteHeader} from "@/widgets/layout/ui/website-header/WebsiteHeader";
import {SideHeader} from "@/widgets/layout/ui/side-header/SideHeader";
import {WebsiteFooter} from "@/widgets/layout/ui/website-footer/WebsiteFooter";

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