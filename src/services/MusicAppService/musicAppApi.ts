import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAccessTokenInfo} from "../../types/IAccessTokenInfo.ts";
import {RootState} from "../../store/store.ts";
import {ISearchResponse} from "../../types/ISearchResponse.ts";
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
                    type: ['artist', 'track']
                },
                method: 'GET',
            }),
        })
    })
})
export const {useSearchQuery} = musicAppApi