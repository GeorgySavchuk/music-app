import HomePage from "../../pages/HomePage/HomePage.tsx";
import SearchPage from "../../pages/SearchPage/SearchPage.tsx";
import {IRoute} from "../api/types.ts";

export enum RouteNames {
    HOME = '/',
    SEARCH = '/search'
}
export const ROUTES: IRoute[] = [
    {path: RouteNames.HOME, element: <HomePage/>},
    {path: RouteNames.SEARCH, element: <SearchPage/>}
]