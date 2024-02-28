import React from "react";
import styles from "./styles.module.css";
import {ISearchResponse} from "../../shared/api/types.ts";
import {SearchFilters} from "../../features/search-filters";
import {ArtistList} from "../artist-list";
import {TrackList} from "../track-list";
import {AlbumList} from "../album-list";

interface SearchContentProps {
    searchResults: ISearchResponse;
    searchRequest: string
}
export const SearchContent : React.FC<SearchContentProps> = ({searchResults, searchRequest}) => {
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
            <SearchFilters/>
            <ArtistList artists={searchResults.artists.items}/>
            <TrackList tracks={searchResults.tracks.items}/>
            <AlbumList albums={searchResults.albums.items}/>
        </div>
    );
};