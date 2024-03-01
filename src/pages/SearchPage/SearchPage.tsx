import React from 'react';
import styles from "./styles.module.css";
import {Layout} from "../../widgets/layouts/app-layout";
import {Header} from "../../widgets/header";
import {SearchInput} from "../../features/search-input";
import {Main} from "../../widgets/layouts/main-layout";
import {SearchContent} from "../../widgets/search-content";
import {useAppSelector} from "../../shared/lib";

export const SearchPage : React.FC = () => {
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