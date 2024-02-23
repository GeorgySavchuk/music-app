import AppRouter from "./router/AppRouter.tsx";
import {useEffect} from "react";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase/FirebaseInit.ts";
import {setAuth, setUser} from "./store/slices/authSlice.ts";
import {IUser} from "./types/IUser.ts";
import {useGetAccessTokenMutation} from "./services/MusicAppService.ts";
import {useAppDispatch} from "./hooks/redux.ts";
import {setAccessTokenInfo} from "./store/slices/spotifyAuthorizationSlice.ts";
import {IAccessTokenInfo} from "./types/IAccessTokenInfo.ts";
function App() {
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

export default App
