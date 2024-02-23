import styles from './HomePage.module.css'
import React from "react";
import Layout from "../../components/Layout/Layout.tsx";
import {getWelcomeMessage} from "../../utils/helpers/getWelcomeMessage.ts";
import Header from "../../components/Header/Header.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
import ListItem from "../../components/ListItem/ListItem.tsx";
import likedSongs from '../../images/liked.png'
const HomePage : React.FC = () => {
    const {user} = useAppSelector(state => state.authReducer)
    return (
        <Layout>
            <Header>
                <div className={styles.headerMainContent}>
                    <h1>{getWelcomeMessage(user.userName)}</h1>
                </div>
                <div className={styles.listItems}>
                    <ListItem name="Любимые треки" image={likedSongs} href="/"/>
                </div>
            </Header>
        </Layout>
    );
};

export default HomePage;