import {IImage} from "./IImage.ts";

export interface IAlbum {
    total_tracks: number;
    id: string;
    images: IImage[];
    name: string;
    type: string;
}