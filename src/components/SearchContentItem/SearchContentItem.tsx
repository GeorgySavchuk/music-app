import React from 'react';
import styles from './SearchContentItem.module.css'
import {IArtist} from "../../types/IArtist.ts";
import {MdFavoriteBorder} from "react-icons/md";
import {ITrack} from "../../types/ITrack.ts";
interface SearchContentItemProps {
    content: IArtist | ITrack;
}
const SearchContentItem : React.FC<SearchContentItemProps> = ({content}) => {
    const printArtists = (artists: IArtist[]): string => {
        return artists.reduce((result , artist, index) => {
            if (index === artists.length - 1) {
                return result + artist.name
            }
            return result + `${artist.name}, `
        }, '')
    }
    return (
        <div className={styles.searchContentItem}>
            <div className={styles.contentContainer}>
                <div className={styles.image}>
                    {
                        content.type === 'artist'
                            ? <img src={(content as IArtist).images[(content as IArtist).images.length - 1].url} alt={'Картинка исполнителя'}/>
                            : <img src={(content as ITrack).album.images[(content as ITrack).album.images.length - 1].url} alt={'Картинка трека'}/>
                    }
                </div>
                <div className={styles.songOrArtistInfo}>
                    <p className={styles.nameOrTitle}>{content.name}</p>
                    {content.type === 'track' && <p className={styles.artists}>{printArtists((content as ITrack).artists)}</p>}
                </div>
            </div>
            <button>
                <MdFavoriteBorder size={25} color={'#fff'}/>
            </button>
        </div>
    );
};

export default SearchContentItem;