import React from "react";
import styles from "./styles.module.css";
import {ISearchResponse} from "../../shared/api/types.ts";
import {SearchArtistList} from "../search-artist-list";
import {SearchTrackList} from "../search-track-list";
import {SearchAlbumList} from "../search-album-list";

interface SearchContentProps {
    searchResults: ISearchResponse;
    searchRequest: string;
}
export const SearchContent : React.FC<SearchContentProps> = ({searchResults, searchRequest}) => {
    if (Object.keys(searchResults).length === 0 || !searchRequest) {
        return null
    }
    if (searchResults.artists.items.length === 0 && searchResults.tracks.items.length === 0 && searchResults.albums.items.length === 0) {
        return (
            <div className={styles.badRequest}>
                <span>{`По запросу «${searchRequest}» ничего не найдено`}</span>
            </div>
        )
    }
    return (
        <div className={styles.searchContent}>
            <SearchArtistList artists={searchResults.artists.items} searchRequest={searchRequest}/>
            <SearchTrackList tracks={searchResults.tracks.items} searchRequest={searchRequest}/>
            <SearchAlbumList albums={searchResults.albums.items} searchRequest={searchRequest}/>
        </div>
    );
};