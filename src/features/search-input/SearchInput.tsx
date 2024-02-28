import React, {FormEvent, useEffect, useState} from "react";
import styles from "./styles.module.css";
import {CiSearch} from "react-icons/ci";
import {useAppDispatch, useDebounce} from "../../shared/lib";
import {useSearchQuery} from "../../shared/api";
import {setSearchRequest, setSearchResults} from "../../shared/model";
import {ISearchResponse} from "../../shared/api/types.ts";
import {Input} from "../../shared/ui";

interface SearchInputProps {
    placeholder: string;
}
export const SearchInput : React.FC<SearchInputProps> = ({placeholder}) => {
    const [searchValue, setSearchValue] = useState<string>("")
    const dispatch = useAppDispatch()
    const debouncedSearchValue = useDebounce<string>(searchValue, 500)
    const {data} = useSearchQuery(debouncedSearchValue, {
        skip: !debouncedSearchValue
    })
    useEffect(() => {
        console.log(data)
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