import React from 'react';
import styles from './styles.module.css'
import {MdFavoriteBorder} from "react-icons/md";
import {ITrack} from "../../shared/api/types.ts";
import {printArtists} from "../../shared/lib";
interface SearchContentItemProps {
    content: ITrack;
}
export const TrackListItem : React.FC<SearchContentItemProps> = ({content}) => {
    return (
        <div className={styles.searchContentItem}>
            <div className={styles.contentContainer}>
                <div className={styles.image}>
                    <img src={content.album.images[content.album.images.length - 1].url} alt={'Картинка трека'}/>
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
