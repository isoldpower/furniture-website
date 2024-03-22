import {createHashRouter} from "react-router-dom";
import {Suspense} from "react";
import {App} from "@/app/App";
import {Home} from "@/pages/home";
import {websiteRoutes} from "@/shared/lib";
import {CatalogSectionPage} from "@/pages/section-page/ui/CatalogSectionPage";
import {ProductPage} from "@/pages/product-page/ui/ProductPage";
import {Catalog} from "@/pages/catalog-page/ui/Catalog";
import {ErrorPage} from "@/pages/error-page/ui/ErrorPage";

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
                        <CatalogSectionPage />
                    </Suspense>
            },
            {
                path: websiteRoutes.catalog + '/:section/:item',
                element:
                    <Suspense fallback="Loading...">
                        <ProductPage />
                    </Suspense>
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
]

export const router = createHashRouter(routes);
export default routes;