import React from "react";
import styles from "./styles.module.css";
import {useAppSelector} from "../../shared/lib";
import {IArtist} from "../../shared/api/types.ts";
import {Filters} from "../../shared/model";
import {ArtistItem} from "../../entities/artist-list-item";

interface ArtistListProps {
    artists: IArtist[]
}
export const ArtistList : React.FC<ArtistListProps> = ({artists}) => {
    const {searchFilter} = useAppSelector(state => state.searchReducer)
    const filterArtists = (artists: IArtist[]) : IArtist[] => {
        return artists.filter(artist => artist.images.length !== 0)
    }
    return (
        <div className={`${styles.artists} ${artists.length === 0 || searchFilter !== Filters.ARTISTS ? styles.notVisible : ''}`}>
            {filterArtists(artists).map(artist => (
                <ArtistItem key={artist.id} content={artist}/>
            ))}
        </div>
    );
};