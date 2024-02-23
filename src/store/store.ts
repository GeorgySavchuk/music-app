import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice.ts";
import authReducer from "./slices/authSlice.ts";
import spotifyAuthorizationReducer from "./slices/spotifyAuthorizationSlice.ts";
import {musicAppApi, musicAppAuthorizationApi} from "../services/MusicAppService.ts";
const rootReducer = combineReducers({
    modalReducer,
    authReducer,
    spotifyAuthorizationReducer,
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