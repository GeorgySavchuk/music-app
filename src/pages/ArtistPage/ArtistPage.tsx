import React from 'react';
import styles from './styles.module.css'
import {Header} from "../../widgets/header";
import {Main} from "../../widgets/layouts/main-layout";
import {Layout} from "../../widgets/layouts/app-layout";
import {useParams} from "react-router-dom";
import {useGetArtistAlbumsQuery, useGetArtistQuery, useGetArtistTopTracksQuery} from "../../shared/api";
import {Loader} from "../../shared/ui/loader";
import {FaPlay} from "react-icons/fa";
import {printFollowers} from "../../shared/lib"
import {PopularTracks} from "../../widgets/artist-popular-tracks-list";
import {ArtistAlbums} from "../../widgets/artist-albums";
type ArtistsPageParams = {
    id: string;
}

export const ArtistPage : React.FC = () => {
    const {id} = useParams<ArtistsPageParams>()
    const {
        data: artist,
        isLoading: artistLoading,
        isFetching: artistFetching
    } = useGetArtistQuery(id as string, {
        skip: !id
    })
    const {
        data: popularTracks,
        isLoading: popularTracksLoading,
        isFetching: popularTracksFetching
    } = useGetArtistTopTracksQuery(id as string, {
        skip: !id
    })
    const {
        data: artistAlbums,
        isLoading: artistAlbumsLoading,
        isFetching: artistAlbumsFetching
    } = useGetArtistAlbumsQuery(id as string, {
        skip: !id
    })
    return (
        <Layout>
            {
                artistLoading
                || artistFetching
                || popularTracksLoading
                || popularTracksFetching
                || artistAlbumsLoading
                || artistAlbumsFetching
                    ? <Loader/>
                    :
                    <>
                        <Header>
                            <div className={styles.artistHeader}>
                                <div className={styles.artistPhoto}>
                                    <img src={artist?.images[0].url} alt={'Картинка исполнителя'}/>
                                </div>
                                <div className={styles.artistInfo}>
                                    <h1>{artist?.name}</h1>
                                    <span>{`${printFollowers(artist?.followers.total as number)} слушателей за месяц`}</span>
                                    <div className={styles.btns}>
                                        <button className={styles.playBtn}>
                                            <FaPlay size={16}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Header>
                        <Main>
                            <PopularTracks popularTracks={popularTracks}/>
                            <ArtistAlbums albums={artistAlbums}/>
                        </Main>
                    </>
            }
        </Layout>
    );
};