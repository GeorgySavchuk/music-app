import React from 'react';
import styles from './SearchContent.module.css'
import {ISearchResponse} from "../../types/ISearchResponse.ts";
import {NonUndefined} from "react-hook-form";
import SearchContentItem from "../SearchContentItem/SearchContentItem.tsx";
import {IArtist} from "../../types/IArtist.ts";
interface SearchContentProps {
    searchResults: NonUndefined<ISearchResponse>;
    searchRequest: string
}
const SearchContent : React.FC<SearchContentProps> = ({searchResults, searchRequest}) => {
    const filterResults = (results: ISearchResponse) : IArtist[] => {
        return results.artists.items.filter(artist => artist.images.length !== 0)
    }
    if (Object.keys(searchResults).length === 0 || !searchRequest) {
        return null
    }
    if (searchResults.artists.items.length === 0) {
        return (
            <div className={styles.badRequest}>
                <span>{`По запросу «${searchRequest}» ничего не найдено`}</span>
            </div>
        )
    }
    return (
        <div className={styles.searchContent}>
            {
                filterResults(searchResults).map((artist) => (
                    <SearchContentItem key={artist.id} content={artist}/>
                ))
            }
        </div>
    );
};

export default SearchContent;