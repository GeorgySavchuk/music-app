import {IAlbum} from "./IAlbum.ts";
import {IArtist} from "./IArtist.ts";

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