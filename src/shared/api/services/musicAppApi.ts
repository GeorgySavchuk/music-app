import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAccessTokenInfo, IAlbums, IArtist, IArtistPopularTracks, ISearchResponse} from "../types.ts";
import {RootState} from "../../model";
export const musicAppApi = createApi({
    reducerPath: 'musicAppApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1/',
        prepareHeaders: (headers, {getState}) => {
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
                method: 'GET'
            }),
            transformResponse: (response : ISearchResponse): ISearchResponse => {
                response.artists.items = response.artists.items.filter(artist => artist.images.length !== 0)
                response.tracks.items = response.tracks.items.filter(track => track.album.images.length !== 0 && track.explicit)
                response.albums.items = response.albums.items.filter(album => album.images.length !== 0)
                return response
            }
        }),
        getArtist: builder.query<IArtist, string>({
            query: (id: string) => ({
                url: `artists/${id}`,
                method: 'GET'
            })
        }),
        getArtistTopTracks: builder.query<IArtistPopularTracks,string>({
            query: (id: string) => ({
                url: `artists/${id}/top-tracks`,
                method: 'GET',
                params: {
                    market: 'NL'
                }
            })
        }),
        getArtistAlbums: builder.query<IAlbums,string>({
            query: (id: string) => ({
                url: `artists/${id}/albums`,
                method: 'GET',
                params: {
                    market: 'NL',
                    limit: 50
                }
            }),
            transformResponse(response: IAlbums): IAlbums{
                response.items = response.items.filter(album => album.images.length !== 0)
                return response
            }
        })
    })
})
export const {useSearchQuery, useGetArtistQuery, useGetArtistTopTracksQuery, useGetArtistAlbumsQuery} = musicAppApi