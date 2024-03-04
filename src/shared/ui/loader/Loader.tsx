import React from 'react';
import styles from './styles.module.css'
import {BounceLoader} from "react-spinners";
export const Loader : React.FC = () => {
    return (
        <div className={styles.loader}>
            <BounceLoader size={55} color={'rgb(6, 95, 60)'} speedMultiplier={1.2}/>
        </div>
    );
};
