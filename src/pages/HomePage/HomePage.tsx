import styles from './styles.module.css'
import React from "react";
import likedSongs from '../../images/liked.png'
import {getWelcomeMessage, useAppSelector} from "../../shared/lib";
import {Layout} from "../../widgets/layouts/app-layout";
import {Header} from "../../widgets/header";
import {RecentlyVisitedItem} from "../../entities/recently-visited-item";
import {RouteNames} from "../../shared/routing";
export const HomePage : React.FC = () => {
    const {user} = useAppSelector(state => state.authReducer)
    return (
        <Layout>
            <Header>
                <div className={styles.headerMainContent}>
                    <h1>{getWelcomeMessage(user.userName)}</h1>
                </div>
                <div className={styles.listItems}>
                    <RecentlyVisitedItem name={"Любимые треки"} image={likedSongs} href={RouteNames.HOME}/>
                </div>
            </Header>
        </Layout>
    );
};
