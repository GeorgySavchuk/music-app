import React, {FormEvent, useEffect, useState} from 'react';
import styles from './SearchInput.module.css'
import {CiSearch} from "react-icons/ci";
import Input from "../UI/Input/Input.tsx";
import useDebounce from "../../hooks/useDebounce.ts";
import {useSearchQuery} from "../../services/MusicAppService/musicAppApi.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {setSearchRequest, setSearchResults} from "../../store/slices/searchSlice.ts";
import {ISearchResponse} from "../../types/ISearchResponse.ts";
interface SearchInputProps {
    placeholder: string;
}
const SearchInput : React.FC<SearchInputProps> = ({placeholder}) => {
    const [searchValue, setSearchValue] = useState<string>("")
    const dispatch = useAppDispatch()
    const debouncedSearchValue = useDebounce<string>(searchValue, 500)
    const {data, isLoading, isFetching, isError} = useSearchQuery(debouncedSearchValue, {
        skip: !debouncedSearchValue
    })
    useEffect(() => {
        dispatch(setSearchResults(data ?? {} as ISearchResponse))
        dispatch(setSearchRequest(debouncedSearchValue))
    }, [debouncedSearchValue, data]);
    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    return (
        <div className={styles.search}>
            <form>
                <div className={styles.searchGroup}>
                    <div className={styles.searchIcon}>
                        <CiSearch color={'#a7a6a8'} size={21}/>
                    </div>
                    <Input placeholder={placeholder} inputValue={searchValue} onChange={handleInput} />
                </div>
            </form>
        </div>
    );
};

export default SearchInput;