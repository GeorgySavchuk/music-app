import React from "react";
import {Provider} from "react-redux";
import {setupStore} from "../../shared/model";

export const reduxProvider = (component: () => React.ReactNode) => () => (
    <Provider store={setupStore()}>
        {component()}
    </Provider>
)