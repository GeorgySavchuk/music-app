import {IImage} from "./IImage.ts";

export interface IArtist {
    images: IImage[];
    name: string;
    genres: string[];
    id: string;
    type: string;
}