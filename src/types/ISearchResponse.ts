import {IArtists} from "./IArtists.ts";
import {ITracks} from "./ITracks.ts";

export interface ISearchResponse {
    tracks: ITracks;
    artists: IArtists;
}