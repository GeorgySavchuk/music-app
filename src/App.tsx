import AppRouter from "./router/AppRouter.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase/FirebaseInit.ts";
import {setAuth, setUser} from "./store/slices/authSlice.ts";
import {IUser} from "./types/IUser.ts";
function App() {
  const dispatch = useDispatch()
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
