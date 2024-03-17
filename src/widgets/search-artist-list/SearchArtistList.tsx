import React from "react";
import styles from "./styles.module.css";
import {useAppSelector} from "../../shared/lib";
import {IArtist} from "../../shared/api/types.ts";
import {Filters} from "../../shared/model";
import {ArtistItem} from "../../entities/artist-list-item";

interface ArtistListProps {
    artists: IArtist[]
    searchRequest: string
}
export const SearchArtistList : React.FC<ArtistListProps> = ({artists, searchRequest}) => {
    const {searchFilter} = useAppSelector(state => state.searchReducer)
    if (artists.length === 0) {
        return (
            <div className={`${styles.badRequest} ${searchFilter !== Filters.ARTISTS ? styles.notVisible : ''}`}>
                <span>{`По запросу «${searchRequest}» не найдено исполнителей`}</span>
            </div>
        )
    }
    return (
        <div className={`${styles.artists} ${searchFilter !== Filters.ARTISTS ? styles.notVisible : ''}`}>
            {
                artists.map(artist => (
                    <ArtistItem key={artist.id} content={artist}/>
                ))
            }
        </div>
    );
};