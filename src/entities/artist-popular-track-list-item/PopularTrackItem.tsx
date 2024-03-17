import React from 'react';
import styles from "./styles.module.css";
import {FaPlay} from "react-icons/fa";
import {printArtists, printTrackDuration} from "../../shared/lib";
import {IoTimeOutline} from "react-icons/io5";
import {ITrack} from "../../shared/api/types.ts";
interface PopularTrackItemProps {
    content: ITrack;
    position: number;
}
export const PopularTrackItem: React.FC<PopularTrackItemProps> = ({content, position}) => {
    return (
        <div className={styles.popularTrackItem}>
            <div className={styles.contentContainer}>
                <div className={styles.listPosition}>
                    <span>{position}</span>
                </div>
                <div className={styles.image}>
                    <img src={content.album.images[content.album.images.length - 1].url} alt={'Картинка трека'}/>
                    <div className={styles.playBtnContainer}>
                        <button className={styles.playBtn}>
                            <FaPlay size={12}/>
                        </button>
                    </div>
                </div>
                <div className={styles.songOrArtistInfo}>
                    <p className={styles.nameOrTitle}>{content.name}</p>
                    <p className={styles.artists}>{printArtists(content.artists)}</p>
                </div>
                <div className={styles.trackDuration}>
                    <IoTimeOutline size={20}/>
                    <p>{printTrackDuration(content.duration_ms)}</p>
                </div>
            </div>
        </div>
    );
};
