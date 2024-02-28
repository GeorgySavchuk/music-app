import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound.tsx";
import {ROUTES} from "../shared/routing";

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            {
                ROUTES.map(route => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))
            }
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};