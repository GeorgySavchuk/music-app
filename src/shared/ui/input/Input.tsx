import React, {FormEvent} from 'react'
import styles from './styles.module.css'
interface InputProps {
    placeholder: string;
    inputValue: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
}
export const Input : React.FC<InputProps> = ({placeholder, inputValue, onChange}) => {
    return <input className={styles.input} placeholder={placeholder} value={inputValue} onChange={onChange}/>
};

