import classes from '@/app/App.module.scss';
import {Outlet} from 'react-router-dom';
import {WebsiteHeader} from "@/widgets/website-header/ui/WebsiteHeader";
import {layers} from "@/shared/constants/layers";
import {ProvideSideHeader} from "@/app/providers/modal/side-header/ProvideSideHeader";
import {SideHeader} from "@/widgets/side-header/ui/SideHeader";
import {WebsiteFooter} from "@/widgets/website-footer/ui/WebsiteFooter";

export const App = () => {

    return (
        <>
            <WebsiteHeader />
            <main style={{zIndex: 98, minHeight: '90dvh'}} id='body'>
                <div id={layers.inactiveModals} className={'absolute-stretch'} style={{position: 'fixed', zIndex: 99, visibility: 'hidden'}}>
                    <ProvideSideHeader id={'side-header'}>
                        <SideHeader />
                    </ProvideSideHeader>
                </div>
                <div id={layers.activeModals} className={`${classes.pageLayout__activeModals} absolute-stretch`}
                     style={{position: "fixed", zIndex: 100}}>
                </div>
                <div style={{zIndex: 97}}>
                    <Outlet/>
                </div>
            </main>
            <WebsiteFooter />
        </>
    );
};