import React from "react";
import styles from "./styles.module.css";
import {ITrack} from "../../shared/api/types.ts";
import {useAppSelector} from "../../shared/lib";
import {Filters} from "../../shared/model";
import {TrackListItem} from "../../entities/track-list-item";

interface SearchContentTrackListProps {
    tracks: ITrack[];
}
export const TrackList : React.FC<SearchContentTrackListProps> = ({tracks}) => {
    const {searchFilter} = useAppSelector(state => state.searchReducer)
    const filterTracks = (tracks: ITrack[]) : ITrack[] => {
        return tracks.filter(track => track.album.images.length !== 0 && track.explicit)
    }
    return (
        <div className={`${styles.tracks} ${tracks.length === 0 || searchFilter !== Filters.TRACKS ? styles.notVisible : ''}`}>
            {
                filterTracks(tracks).map((track) => (
                    <TrackListItem key={track.id} content={track}/>
                ))
            }
        </div>
    );
};