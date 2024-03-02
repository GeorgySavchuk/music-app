import React from "react";
import styles from "./styles.module.css";
import {ITrack} from "../../shared/api/types.ts";
import {useAppSelector} from "../../shared/lib";
import {Filters} from "../../shared/model";
import {TrackItem} from "../../entities/track-list-item";

interface SearchContentTrackListProps {
    tracks: ITrack[];
    searchRequest: string
}
export const TrackList : React.FC<SearchContentTrackListProps> = ({tracks, searchRequest}) => {
    const {searchFilter} = useAppSelector(state => state.searchReducer)
    if (tracks.length === 0) {
        return (
            <div className={`${styles.badRequest} ${searchFilter !== Filters.TRACKS ? styles.notVisible : ''}`}>
                <span>{`По запросу «${searchRequest}» не найдено треков`}</span>
            </div>
        )
    }
    return (
        <div className={`${styles.tracks} ${searchFilter !== Filters.TRACKS ? styles.notVisible : ''}`}>
            {
                tracks.map(track => (
                    <TrackItem key={track.id} content={track}/>
                ))
            }
        </div>
    );
};