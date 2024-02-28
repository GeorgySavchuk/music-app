import React from "react";
import styles from "./styles.module.css";
import {IAlbum} from "../../shared/api/types.ts";
import {useAppSelector} from "../../shared/lib";
import {Filters} from "../../shared/model";
import {AlbumItem} from "../../entities/album-list-item";


interface AlbumListProps {
    albums: Omit<IAlbum, "tracks" | "label">[]
}
export const AlbumList : React.FC<AlbumListProps> = ({albums}) => {
    const {searchFilter} = useAppSelector(state => state.searchReducer)
    const filterAlbums = (albums: Omit<IAlbum, "tracks" | "label">[]) : Omit<IAlbum, "tracks" | "label">[] => {
        return albums.filter(album => album.images.length !== 0)
    }
    return (
        <div className={`${styles.albums} ${albums.length === 0 || searchFilter !== Filters.ALBUMS ? styles.notVisible : ''}`}>
            {filterAlbums(albums).map(album => (
                <AlbumItem key={album.id} content={album}/>
            ))}
        </div>
    );
};