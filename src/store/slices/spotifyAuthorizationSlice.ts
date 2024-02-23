import {IAccessTokenInfo} from "../../types/IAccessTokenInfo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface SpotifyAuthorizationState {
    accessTokenInfo: IAccessTokenInfo;
}

const initialState : SpotifyAuthorizationState = {
    accessTokenInfo:  {} as IAccessTokenInfo
}
const spotifyAuthorizationSlice = createSlice({
    name: 'spotifyAuthorization',
    initialState,
    reducers: {
        setAccessTokenInfo: (state, action: PayloadAction<IAccessTokenInfo>) => {
            state.accessTokenInfo = action.payload
        }
    }
})
export const {setAccessTokenInfo} = spotifyAuthorizationSlice.actions
export default spotifyAuthorizationSlice.reducer