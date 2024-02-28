import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {useAppDispatch} from "../shared/lib";
import {useGetAccessTokenMutation} from "../shared/api";
import {IAccessTokenInfo, IUser} from "../shared/api/types.ts";
import {setAccessTokenInfo, setAuth, setUser} from "../shared/model";
import {auth} from "../shared/config";
import {AppRouter} from "./AppRouter.tsx";
export const App = () => {
    const dispatch = useAppDispatch()
    const [getAccessToken] = useGetAccessTokenMutation()
    const fetchAccessToken = async () => {
        const {data} : IAccessTokenInfo = await getAccessToken()
        dispatch(setAccessTokenInfo({...data}))
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
        <AppRouter/>
    )
}