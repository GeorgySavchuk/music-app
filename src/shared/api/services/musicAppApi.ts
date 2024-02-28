import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAccessTokenInfo, ISearchResponse} from "../types.ts";
import {RootState} from "../../model/store.ts";
export const musicAppApi = createApi({
    reducerPath: 'musicAppApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1/',
        prepareHeaders: (headers, { getState }) => {
            const accessTokenInfo: IAccessTokenInfo = (getState() as RootState).spotifyAuthorizationReducer.accessTokenInfo
            headers.set('Content-Type', 'application/json');
            headers.set('Authorization', `${accessTokenInfo.token_type} ${accessTokenInfo.access_token}`);
            return headers
        },
    }),
    endpoints: (builder) => ({
        search: builder.query<ISearchResponse, string>({
            query: (input: string) => ({
                url: 'search',
                params: {
                    q: input,
                    type: ['artist', 'track', 'album']
                },
                method: 'GET',
            }),
        })
    })
})
export const {useSearchQuery} = musicAppApi