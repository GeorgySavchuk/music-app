import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useAppDispatch} from "../shared/lib";
import {useGetAccessTokenMutation} from "../shared/api";
import {AuthorizationResponse, IUser} from "../shared/api/types.ts";
import {setAccessTokenInfo, setAuth, setUser} from "../shared/model";
import {RouteNames} from "../shared/routing";
import {HomePage} from "../pages/HomePage";
import {SearchPage} from "../pages/SearchPage";
import {ArtistPage} from "../pages/ArtistPage";
import {NotFound} from "../pages/NotFound";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../shared/config";

export const AppContent: React.FC = () => {
    const dispatch = useAppDispatch()
    const [getAccessToken] = useGetAccessTokenMutation()
    const fetchAccessToken = async () => {
        const response: AuthorizationResponse  = await getAccessToken()
        if ("data" in response) {
            dispatch(setAccessTokenInfo({...response.data}))
        } else {
            console.log("Неправильный запрос!")
        }
    }
    useEffect(() => {
        fetchAccessToken()
    }, []);
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(setAuth(true))
                dispatch(setUser({
                    userName: user.displayName ?? "",
                    email: user.email ?? "",
                }))
            } else {
                dispatch(setAuth(false))
                dispatch(setUser({} as IUser))
            }
        })
    }, [auth]);
    return (
        <Routes>
            <Route path={RouteNames.HOME} element={<HomePage/>}/>
            <Route path={RouteNames.SEARCH} element={<SearchPage/>}/>
            <Route path={RouteNames.ARTIST} element={<ArtistPage/>}/>
            <Route path={RouteNames.NOT_FOUND} element={<NotFound/>}/>
        </Routes>
    );
};
