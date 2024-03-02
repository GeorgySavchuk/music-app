import React from "react";
import styles from "./styles.module.css";
import {useAppDispatch, useAppSelector} from "../../shared/lib";
import {Filters, setSearchFilter} from "../../shared/model";

export const SearchFilters : React.FC = () => {
    const dispatch = useAppDispatch()
    const {searchFilter, searchResults, searchRequest} = useAppSelector(state => state.searchReducer)
    const setFilter = (filter: Filters) => {
        dispatch(setSearchFilter(filter))
    }
    if (Object.keys(searchResults).length === 0 || !searchRequest) {
        return null
    }
    return (
        <div className={styles.searchFilters}>
            <ul>
                <li className={`${styles.filter} ${searchFilter === Filters.ARTISTS ? styles.active : ''}`} onClick={() => setFilter(Filters.ARTISTS)}>
                    <h3>Исполнители</h3>
                </li>
                <li className={`${styles.filter} ${searchFilter === Filters.TRACKS ? styles.active : ''}`} onClick={() => setFilter(Filters.TRACKS)}>
                    <h3>Треки</h3>
                </li>
                <li className={`${styles.filter} ${searchFilter === Filters.ALBUMS ? styles.active : ''}`} onClick={() => setFilter(Filters.ALBUMS)}>
                    <h3>Альбомы</h3>
                </li>
            </ul>
        </div>
    );
};