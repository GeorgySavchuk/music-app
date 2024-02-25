import React from 'react';
import Header from "../../components/Header/Header.tsx";
import Layout from "../../components/Layout/Layout.tsx";
import styles from "../HomePage/HomePage.module.css";
import SearchInput from "../../components/SearchInput/SearchInput.tsx";
import Main from "../../components/Main/Main.tsx";
import SearchContent from "../../components/SearchContent/SearchContent.tsx";
import {useAppSelector} from "../../hooks/redux.ts";

const SearchPage : React.FC = () => {
    const {searchResults, searchRequest} = useAppSelector(state => state.searchReducer)
    return (
        <Layout>
            <Header>
                <div className={styles.headerMainContent}>
                    <h1>Поиск</h1>
                    <SearchInput placeholder={'Что хотите включить?'}/>
                </div>
            </Header>
            <Main>
                <SearchContent searchResults={searchResults} searchRequest={searchRequest}/>
            </Main>
        </Layout>
    );
};

export default SearchPage;