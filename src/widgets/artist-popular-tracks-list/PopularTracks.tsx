import React from 'react';
import styles from './styles.module.css'
import {IArtistPopularTracks} from "../../shared/api/types.ts";
interface PopularTracksProps {
    popularTracks: IArtistPopularTracks
}
export const PopularTracks : React.FC<PopularTracksProps> = ({popularTracks}) => {
    console.log(popularTracks)
    if (!popularTracks) {
        return null
    }
    return (
        <div className={styles.popularTracks}>

        </div>
    );
};