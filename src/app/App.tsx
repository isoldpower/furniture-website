import classes from '@/app/App.module.scss';
import {Outlet, useLocation} from 'react-router-dom';
import {layers} from "@/shared/lib";
import {ModalProvider} from "@/app/providers";
import {useEffect} from "react";
import {WebsiteHeader, WebsiteFooter, SideHeader} from "@/widgets/navigation";
import {closeAll, useAppDispatch} from "@/app/redux";
import {AnchorScroll} from "@/app/providers";
import {PortfolioImageInspect} from "@/widgets/portfolio";
import {CatalogModal} from "@/widgets/catalog-section";
import {NotificationsModal, OrderProjectModal} from "@/widgets/feedback";

const App = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(closeAll());
    }, [dispatch, location]);

    return (
        <>
            <div id='header' style={{zIndex: 99}}>
                <WebsiteHeader />
            </div>
            <main className={`${classes.pageLayout__body}`} id='body' style={{zIndex: 98, minHeight: '90dvh'}}>
                <div className="absolute-stretch" id={layers.inactiveModals} style={{position: 'fixed', zIndex: 99, visibility: 'hidden'}}>
                    <ModalProvider id="side-header" identifier="header">
                        <SideHeader />
                    </ModalProvider>
                    <ModalProvider id="modal-catalog" identifier="catalog">
                        <CatalogModal />
                    </ModalProvider>
                    <ModalProvider id="portfolio-overview" identifier="portfolio">
                        <PortfolioImageInspect />
                    </ModalProvider>
                    <ModalProvider id="order-project" identifier="order">
                        <OrderProjectModal />
                    </ModalProvider>
                </div>
                <div className={`${classes.pageLayout__activeModals} absolute-stretch`} id={layers.activeModals} style={{position: "fixed", zIndex: 100}} />
                <div style={{zIndex: 97}}>
                    <AnchorScroll yOffset={-100} />
                    <Outlet />
                </div>
                <div className={`${classes.pageLayout__drawer} absolute-stretch`} style={{position: "fixed", zIndex: 101}}>
                    <NotificationsModal />
                </div>
            </main>
            <WebsiteFooter />
        </>
    );
};

export default App;