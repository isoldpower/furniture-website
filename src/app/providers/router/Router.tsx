import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {App} from "@/app/App";
import Home from "@/pages/home/Home";

const routes = [
    {
        path: '/',
        element:
            <Suspense fallback="Loading...">
                <App/>
            </Suspense>,
        children: [
            {
                path: '/',
                element:
                    <Suspense fallback="Loading...">
                        <Home />
                    </Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);
export default routes;