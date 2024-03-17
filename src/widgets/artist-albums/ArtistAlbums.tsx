import React, {useRef} from 'react';
import {IAlbums} from "../../shared/api/types.ts";
import styles from './styles.module.css'
import {AlbumItem} from "../../entities/album-list-item";
interface ArtistAlbumsProps {
    albums: IAlbums | undefined;
}
export const ArtistAlbums: React.FC<ArtistAlbumsProps>  = ({albums}) => {
    const albumsListRef = useRef<HTMLDivElement>(null)
    if (!albums) {
        return null
    }
    return (
        <div className={styles.artistAlbums}>
            <h2>Альбомы исполнителя</h2>
            <div className={styles.albumsLayout} ref={albumsListRef}>
                {
                    albums.items.map(album => (
                        <AlbumItem key={album.id} content={album}/>
                    ))
                }
            </div>
        </div>
    );
};
