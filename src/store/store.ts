import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice.ts";
import authReducer from "./slices/authSlice.ts";
import spotifyAuthorizationReducer from "./slices/spotifyAuthorizationSlice.ts";
import searchReducer from "./slices/searchSlice.ts";
import {musicAppApi} from "../services/MusicAppService/musicAppApi.ts";
import {musicAppAuthorizationApi} from "../services/MusicAppService/musicAppAuthorizationApi.ts";

const rootReducer = combineReducers({
    modalReducer,
    authReducer,
    spotifyAuthorizationReducer,
    searchReducer,
    [musicAppApi.reducerPath]: musicAppApi.reducer,
    [musicAppAuthorizationApi.reducerPath]: musicAppAuthorizationApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(musicAppApi.middleware, musicAppAuthorizationApi.middleware)
    });
};


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']