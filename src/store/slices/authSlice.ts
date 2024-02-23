import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/IUser.ts";
interface AuthState {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
}
const initialState: AuthState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state = initialState, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setUser: (state = initialState, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        setLoading: (state = initialState, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})
export const {setAuth, setUser, setLoading} = authSlice.actions
export default authSlice.reducer