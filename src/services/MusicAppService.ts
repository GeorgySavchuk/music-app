import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAccessTokenInfo} from "../types/IAccessTokenInfo.ts";

export const musicAppApi = createApi({
    reducerPath: 'musicAppApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/'
    }),
    endpoints: (builder) => ({

    })
})
export const musicAppAuthorizationApi = createApi({
    reducerPath: 'musicAppAuthorization',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://accounts.spotify.com/'
    }),
    endpoints: (builder) => ({
        getAccessToken: builder.mutation<IAccessTokenInfo, void>({
            query: () => ({
                url: 'api/token',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
            })
        })
    })
})
export const {useGetAccessTokenMutation} = musicAppAuthorizationApi