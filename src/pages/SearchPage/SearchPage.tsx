import React, {useState} from 'react';
import styles from "./styles.module.css";
import {Layout} from "../../widgets/layouts/app-layout";
import {Header} from "../../widgets/header";
import {SearchInput} from "../../features/search-input";
import {Main} from "../../widgets/layouts/main-layout";
import {SearchContent} from "../../widgets/search-content";
import {useAppSelector} from "../../shared/lib";
import {Loader} from "../../shared/ui/loader";
import {SearchFilters} from "../../features/search-filters";

export const SearchPage : React.FC = () => {
    const {searchResults, searchRequest} = useAppSelector(state => state.searchReducer)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleLoadingChange = (loading: boolean) => {
        setIsLoading(loading)
    }
    return (
        <Layout>
            <Header>
                <div className={styles.headerMainContent}>
                    <h1>Поиск</h1>
                    <SearchInput placeholder={'Что хотите включить?'} onLoadingChange={handleLoadingChange}/>
                </div>
                <div className={styles.filtersLayout}>
                    <SearchFilters/>
                </div>
            </Header>
            <Main>
                {
                    isLoading
                        ? <Loader/>
                        : <SearchContent searchResults={searchResults} searchRequest={searchRequest}/>
                }
            </Main>
        </Layout>
    );
};