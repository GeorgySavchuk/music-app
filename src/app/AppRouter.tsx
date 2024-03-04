import React from "react";
import {Route, Routes} from "react-router-dom";
import {RouteNames} from "../shared/routing";
import {HomePage} from "../pages/HomePage";
import {SearchPage} from "../pages/SearchPage";
import {NotFound} from "../pages/NotFound";
import {ArtistPage} from "../pages/ArtistPage";

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path={RouteNames.HOME} element={<HomePage/>}/>
            <Route path={RouteNames.SEARCH} element={<SearchPage/>}/>
            <Route path={RouteNames.ARTIST} element={<ArtistPage/>}/>
            <Route path={RouteNames.NOT_FOUND} element={<NotFound/>}/>
        </Routes>
    );
};