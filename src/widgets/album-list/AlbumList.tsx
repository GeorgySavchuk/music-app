import React from "react";
import styles from "./styles.module.css";
import {IAlbum} from "../../shared/api/types.ts";
import {useAppSelector} from "../../shared/lib";
import {Filters} from "../../shared/model";
import {AlbumItem} from "../../entities/album-list-item";


interface AlbumListProps {
    albums: Omit<IAlbum, "tracks" | "label">[];
    searchRequest: string
}
export const AlbumList : React.FC<AlbumListProps> = ({albums, searchRequest}) => {
    const {searchFilter} = useAppSelector(state => state.searchReducer)
    if (albums.length === 0) {
        return (
            <div className={`${styles.badRequest} ${searchFilter !== Filters.ALBUMS ? styles.notVisible : ''}`}>
                <span>{`По запросу «${searchRequest}» не найдено альбомов`}</span>
            </div>
        )
    }
    return (
        <div className={`${styles.albums} ${searchFilter !== Filters.ALBUMS ? styles.notVisible : ''}`}>
            {
                albums.map(album => (
                    <AlbumItem key={album.id} content={album}/>
                ))
            }
        </div>
    );
};