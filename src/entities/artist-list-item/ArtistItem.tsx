import React from "react";
import styles from "./styles.module.css";
import {FaPlay} from "react-icons/fa";
import {IArtist} from "../../shared/api/types.ts";
import {useNavigate} from "react-router-dom";

interface ArtistItemProps {
    content: IArtist;
}
export const ArtistItem : React.FC<ArtistItemProps> = ({content}) => {
    const navigate = useNavigate()
    const redirectToArtistPage = () => {
        navigate(`/artist/${content.id}`)
    }
    return (
        <div className={styles.artistItem} onClick={redirectToArtistPage}>
            <div className={styles.imageContainer}>
                <img src={content.images[1].url} alt={'Картинка исполнителя'}/>
            </div>
            <div className={styles.artistInfo}>
                <p className={styles.artistName}>{content.name}</p>
                <p className={styles.prof}>Исполнитель</p>
            </div>
            <div className={styles.playBtnContainer}>
                <button className={styles.playBtn}>
                    <FaPlay size={16}/>
                </button>
            </div>
        </div>
    );
};