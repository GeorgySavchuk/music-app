import React, {FormEvent, useEffect, useState} from 'react';
import styles from './SearchInput.module.css'
import {CiSearch} from "react-icons/ci";
import Input from "../UI/Input/Input.tsx";
import useDebounce from "../../hooks/useDebounce.ts";
interface SearchInputProps {
    placeholder: string;
}
const SearchInput : React.FC<SearchInputProps> = ({placeholder}) => {
    const [searchValue, setSearchValue] = useState<string>("")
    const debouncedSearchValue = useDebounce<string>(searchValue, 500)
    useEffect(() => {

    }, [debouncedSearchValue]);
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