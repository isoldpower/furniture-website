import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {App} from "@/app/App";
import {Home} from "@/pages/home";
import {websiteRoutes} from "@/shared/lib";
import {Catalog} from "@/pages/catalog/ui/Catalog";
import {CatalogSection} from "@/pages/catalog-section/ui/CatalogSection";
import {ItemPage} from "@/pages/item-page/ui/ItemPage";

const routes = [
    {
        path: '/',
        element:
            <Suspense fallback="Loading...">
                <App/>
            </Suspense>,
        children: [
            {
                path: websiteRoutes.home,
                element:
                    <Suspense fallback="Loading...">
                        <Home />
                    </Suspense>
            },
            {
                path: websiteRoutes.catalog,
                element:
                    <Suspense fallback="Loading...">
                        <Catalog />
                    </Suspense>
            },
            {
                path: websiteRoutes.catalog + '/:section',
                element:
                    <Suspense fallback="Loading...">
                        <CatalogSection />
                    </Suspense>
            },
            {
                path: websiteRoutes.catalog + '/:section/:item',
                element:
                    <Suspense fallback="Loading...">
                        <ItemPage />
                    </Suspense>
            }
        ]
    }
]

export const router = createBrowserRouter(routes);
export default routes;