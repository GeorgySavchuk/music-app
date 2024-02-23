import React from 'react';
import Header from "../../components/Header/Header.tsx";
import Layout from "../../components/Layout/Layout.tsx";
import styles from "../HomePage/HomePage.module.css";
import SearchInput from "../../components/SearchInput/SearchInput.tsx";

const SearchPage : React.FC = () => {
    return (
        <Layout>
            <Header>
                <div className={styles.headerMainContent}>
                    <h1>Поиск</h1>
                    <SearchInput placeholder={'Что хотите включить?'}/>
                </div>
            </Header>
        </Layout>
    );
};

export default SearchPage;