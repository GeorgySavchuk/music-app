import React from "react";
import {BrowserRouter} from "react-router-dom";

export const routingProvider = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        {component()}
    </BrowserRouter>
)