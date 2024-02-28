import {IArtist} from "../../api/types.ts";


export const printArtists = (artists: IArtist[] | Pick<IArtist, "type" | "id" | "name">[]): string => {
    return artists.reduce((result , artist, index) => {
        if (index === artists.length - 1) {
            return result + artist.name
        }
        return result + `${artist.name}, `
    }, '')
}