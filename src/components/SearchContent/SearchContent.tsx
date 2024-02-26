import React from 'react';
import styles from './SearchContent.module.css'
import {ISearchResponse} from "../../types/ISearchResponse.ts";
import {NonUndefined} from "react-hook-form";
import SearchContentItem from "../SearchContentItem/SearchContentItem.tsx";
import {IArtist} from "../../types/IArtist.ts";
import {ITrack} from "../../types/ITrack.ts";
interface SearchContentProps {
    searchResults: NonUndefined<ISearchResponse>;
    searchRequest: string
}
const SearchContent : React.FC<SearchContentProps> = ({searchResults, searchRequest}) => {
    const filterArtists = (searchResults: ISearchResponse) : IArtist[] => {
        return searchResults.artists.items.filter(artist => artist.images.length !== 0)
    }
    const filterTracks = (searchResults: ISearchResponse) : ITrack[] => {
        return searchResults.tracks.items.filter(track => track.album.images.length !== 0 && track.explicit)
    }
    if (Object.keys(searchResults).length === 0 || !searchRequest) {
        return null
    }
    if (searchResults.artists.items.length === 0 && searchResults.tracks.items.length === 0) {
        return (
            <div className={styles.badRequest}>
                <span>{`По запросу «${searchRequest}» ничего не найдено`}</span>
            </div>
        )
    }
    return (
        <div className={styles.searchContent}>
            <div className={`${styles.foundArtists} ${searchResults.artists.items.length === 0 ? styles.notFound : ''}`}>
                <h3>Найденные исполнители</h3>
                {
                    filterArtists(searchResults).map((artist) => (
                        <SearchContentItem key={artist.id} content={artist}/>
                    ))
                }
            </div>
            <div className={`${styles.foundTracks} ${searchResults.tracks.items.length === 0 ? styles.notFound : ''}`}>
                <h3>Найденные треки</h3>
                {
                    filterTracks(searchResults).map((track) => (
                        <SearchContentItem key={track.id} content={track}/>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchContent;