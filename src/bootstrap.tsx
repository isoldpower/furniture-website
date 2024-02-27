import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "@/app/providers/router/Router";
import {Provider} from "react-redux";
import {store} from "@/app/redux";

createRoot(document.getElementById("#root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);