import React from "react";
import HomePage from "../pages/HomePage/HomePage.tsx";

interface IRoute {
    path: string;
    element: React.ReactNode;
}
export enum RouteNames {
    HOME = '/',
    SEARCH = '/search'
}
export const ROUTES: IRoute[] = [
    {path: RouteNames.HOME, element: <HomePage/>},
]