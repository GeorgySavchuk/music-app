import React from 'react';
import styles from './styles.module.css'
import {IArtistPopularTracks} from "../../shared/api/types.ts";
import {PopularTrackItem} from "../../entities/artist-popular-track-list-item";
interface PopularTracksProps {
    popularTracks: IArtistPopularTracks | undefined
}
export const PopularTracks : React.FC<PopularTracksProps> = ({popularTracks}) => {
    if (!popularTracks) {
        return null
    }
    return (
        <div className={styles.popularTracks}>
            <h2>Популярные треки</h2>
            <div className={styles.tracksList}>
                <div className={styles.column}>
                    {popularTracks.tracks.slice(0, 5).map((track, index) => (
                        <PopularTrackItem key={track.id} content={track} position={index + 1}/>
                    ))}
                </div>
                <div className={styles.column}>
                    {popularTracks.tracks.slice(5).map((track, index) => (
                        <PopularTrackItem key={track.id} content={track} position={index + 6}/>
                    ))}
                </div>
            </div>
        </div>
    );
};