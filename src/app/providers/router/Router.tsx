import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {App} from "@/app/App";

const routes = [
    {
        path: '/',
        element:
            <Suspense fallback={'Loading...'}>
                <App/>
            </Suspense>
    },
]

export const router = createBrowserRouter(routes);
export default routes;