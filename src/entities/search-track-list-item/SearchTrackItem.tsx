import React from 'react';
import styles from './styles.module.css'
import {MdFavoriteBorder} from "react-icons/md";
import {ITrack} from "../../shared/api/types.ts";
import {printArtists, printTrackDuration} from "../../shared/lib";
import {FaPlay} from "react-icons/fa";
import {IoTimeOutline} from "react-icons/io5";
interface SearchTrackItemProps {
    content: ITrack;

}
export const SearchTrackItem : React.FC<SearchTrackItemProps> = ({content}) => {
    return (
        <div className={styles.searchContentItem}>
            <div className={styles.contentContainer}>
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
            <button>
                <MdFavoriteBorder size={25} color={'#fff'}/>
            </button>
        </div>
    );
};
