import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {websiteRoutes} from "@/shared/lib";

import {AppLazy} from "@/app";
import {HomeLazy} from "@/pages/home-page";
import {CatalogLazy} from "@/pages/catalog-page";
import {SectionLazy} from "@/pages/section-page";
import {ProductLazy} from "@/pages/product-page";
import {MaterialsLazy} from "@/pages/materials-page";
import {PortfolioLazy} from "@/pages/portfolio-page";
import {AboutLazy} from "@/pages/about-page";
import {ErrorPage} from "@/pages/error-page";
import {LoadingPage} from "@/pages/loading-page";
import {DocumentLazy} from "@/pages/document-page";
import {documents} from "@/pages/document-page/documents";

const defaultFallback = <LoadingPage />;

const routes = [
    {
        path: '/',
        element:
            <Suspense fallback={defaultFallback}>
                <AppLazy />
            </Suspense>,
        children: [
            {
                path: websiteRoutes.home,
                element:
                    <Suspense fallback={defaultFallback}>
                        <HomeLazy />
                    </Suspense>
            },
            {
                path: websiteRoutes.catalog,
                element:
                    <Suspense fallback={defaultFallback}>
                        <CatalogLazy />
                    </Suspense>
            },
            {
                path: websiteRoutes.catalog + '/:section',
                element:
                    <Suspense fallback={defaultFallback}>
                        <SectionLazy />
                    </Suspense>
            },
            {
                path: websiteRoutes.catalog + '/:section/:item',
                element:
                    <Suspense fallback={defaultFallback}>
                        <ProductLazy />
                    </Suspense>
            },
            {
                path: websiteRoutes.materials,
                element:
                    <Suspense fallback={defaultFallback}>
                        <MaterialsLazy />
                    </Suspense>
            },
            {
                path: websiteRoutes.portfolio,
                element:
                    <Suspense fallback={defaultFallback}>
                        <PortfolioLazy />
                    </Suspense>
            },
            {
                path: websiteRoutes.about,
                element:
                    <Suspense fallback={defaultFallback}>
                        <AboutLazy />
                    </Suspense>
            },
            {
                path: websiteRoutes.policy,
                element:
                    <Suspense fallback={defaultFallback}>
                        <DocumentLazy document={documents['policy']} />
                    </Suspense>
            },
            {
                path: websiteRoutes.agreement,
                element:
                    <Suspense fallback={defaultFallback}>
                        <DocumentLazy document={documents['agreement']} />
                    </Suspense>
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
]

export const router = createBrowserRouter(routes);
export default routes;