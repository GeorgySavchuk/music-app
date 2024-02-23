import React, {FormEvent} from 'react';
import styles from './Input.module.css'
interface InputProps {
    placeholder: string;
    inputValue: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
}
const Input : React.FC<InputProps> = ({placeholder, inputValue, onChange}) => {
    return <input className={styles.input} placeholder={placeholder} value={inputValue} onChange={onChange}/>
};

export default Input;