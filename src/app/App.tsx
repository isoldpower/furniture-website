import classes from '@/app/App.module.scss';
import {Outlet, useLocation} from 'react-router-dom';
import {layers} from "@/shared/lib/constants/layers";
import {ModalProvider} from "@/app/providers/modal/ModalProvider";
import {useEffect} from "react";
import {WebsiteHeader} from "@/widgets/layout/ui/website-header/WebsiteHeader";
import {SideHeader} from "@/widgets/layout/ui/side-header/SideHeader";
import {WebsiteFooter} from "@/widgets/layout/ui/website-footer/WebsiteFooter";
import {CatalogModal} from "@/widgets/catalog-section/ui/catalog-modal/CatalogModal";
import {closeAll, useAppDispatch} from "@/app/redux";
import {AnchorScroll} from "@/app/providers/scroll/AnchorScroll";
import {PortfolioImageInspect} from "@/widgets/portfolio/ui/portfolio-image-inspect/PortfolioImageInspect";

const App = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(closeAll());
    }, [dispatch, location]);

    return (
        <>
            <WebsiteHeader id='header' style={{zIndex: 99}} />
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
                </div>
                <div className={`${classes.pageLayout__activeModals} absolute-stretch`} id={layers.activeModals} style={{position: "fixed", zIndex: 100}} />
                <div style={{zIndex: 97}}>
                    <AnchorScroll yOffset={-100} />
                    <Outlet />
                </div>
            </main>
            <WebsiteFooter />
        </>
    );
};

export default App;