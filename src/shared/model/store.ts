import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {musicAppApi, musicAppAuthorizationApi} from "../api";
import {authReducer, modalReducer, searchReducer, spotifyAuthorizationReducer} from "./slices";


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