import React from "react";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

export interface IAccessTokenInfo {
    access_token: string;
    token_type: string;
    expires_In: number;
}
export interface AuthorizationNonErrorResponse {
    data: IAccessTokenInfo;
}
export interface AuthorizationErrorResponse {
    error: FetchBaseQueryError | SerializedError;
}
export type AuthorizationResponse = AuthorizationNonErrorResponse | AuthorizationErrorResponse
export interface IAlbum {
    total_tracks: number;
    id: string;
    images: IImage[];
    name: string;
    type: string;
    artists: Pick<IArtist, "id" | "name" | "type">[];
    tracks: ITrack[];
    label: string;
    release_date: string;
}


export interface IAlbums {
    items: Omit<IAlbum, "tracks" | "label">[];
}


export interface IArtist {
    images: IImage[];
    name: string;
    genres: string[];
    id: string;
    type: string;
}


export interface IArtists {
    items: IArtist[];
}


export interface IImage {
    url: string;
    height: number;
    width: number;
}


export interface ISearchResponse {
    tracks: ITracks;
    artists: IArtists;
    albums: IAlbums;
}


export interface ITrack {
    duration_ms: number;
    explicit: boolean;
    id: string;
    name: string;
    preview_url: string | null;
    type: string;
    artists: IArtist[];
    album: IAlbum;
}


export interface ITracks {
    items: ITrack[];
}


export interface IUser {
    userName: string;
    email: string;
}


export interface IRoute {
    path: string;
    element: React.ReactNode;
}