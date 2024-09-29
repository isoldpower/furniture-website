import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {RouterProvider} from "react-router-dom";
import {RouteParserProvider, router} from "@/app/providers";
import {Provider} from "react-redux";
import {store} from "@/app/redux";

createRoot(document.getElementById("#root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouteParserProvider>
                <RouterProvider router={router} />
            </RouteParserProvider>
        </Provider>
    </StrictMode>
);