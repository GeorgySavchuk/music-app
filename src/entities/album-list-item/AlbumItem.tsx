import React from "react";
import styles from "./styles.module.css";
import {FaPlay} from "react-icons/fa";
import {IAlbum} from "../../shared/api/types.ts";
import {printArtists} from "../../shared/lib";
import dayjs from "dayjs";

interface AlbumItemProps {
    content: Omit<IAlbum, "tracks" | "label">;
}
export const AlbumItem : React.FC<AlbumItemProps> = ({content}) => {
    return (
        <div className={styles.albumItem}>
            <div className={styles.imageContainer}>
                <img src={content.images[1].url} alt={'Картинка альбома'}/>
            </div>
            <div className={styles.albumInfo}>
                <p className={styles.albumName}>{content.name}</p>
                <div className={styles.albumDateAndArtists}>
                    <span className={styles.date}>{`${dayjs(content.release_date).year()} • `}</span>
                    <span>{printArtists(content.artists)}</span>
                </div>
            </div>
            <div className={styles.playBtnContainer}>
                <button className={styles.playBtn}>
                    <FaPlay size={16}/>
                </button>
            </div>
        </div>
    );
};