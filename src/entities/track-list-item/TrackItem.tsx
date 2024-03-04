import React from 'react';
import styles from './styles.module.css'
import {MdFavoriteBorder} from "react-icons/md";
import {ITrack} from "../../shared/api/types.ts";
import {printArtists} from "../../shared/lib";
import {FaPlay} from "react-icons/fa";
interface SearchContentItemProps {
    content: ITrack;
}
export const TrackItem : React.FC<SearchContentItemProps> = ({content}) => {
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
            </div>
            <button>
                <MdFavoriteBorder size={25} color={'#fff'}/>
            </button>
        </div>
    );
};
