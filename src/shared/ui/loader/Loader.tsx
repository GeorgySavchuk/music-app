import React from 'react';
import {CircularProgress} from "@mui/material";
import styles from './styles.module.css'
export const Loader : React.FC = () => {
    return (
        <div className={styles.loader}>
            <CircularProgress color={'inherit'} size={55}/>
        </div>
    );
};
