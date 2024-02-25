import React from 'react';
import styles from './SearchContentItem.module.css'
import {IArtist} from "../../types/IArtist.ts";
import {MdFavoriteBorder} from "react-icons/md";
interface SearchContentItemProps {
    content: IArtist;
}
const SearchContentItem : React.FC<SearchContentItemProps> = ({content}) => {
    return (
        <div className={styles.searchContentItem}>
            <div className={styles.contentContainer}>
                <div className={styles.image}>
                    <img src={content.images[content.images.length - 1].url} alt={'Картинка трека или иди исполнителя'}/>
                </div>
                <div className={styles.songOrArtistInfo}>
                    <p>{content.name}</p>
                </div>
            </div>
            <button>
                <MdFavoriteBorder size={25} color={'#fff'}/>
            </button>
        </div>
    );
};

export default SearchContentItem;