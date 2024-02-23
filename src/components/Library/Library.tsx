import styles from './Library.module.css'
import {TbPlaylist} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai";
import React from "react";
const Library: React.FC = () => {
    return (
        <div className={styles.library}>
            <header className={styles.libraryHeader}>
                <div className={styles.title}>
                    <TbPlaylist size={26}/>
                    <span>Моя медиатека</span>
                </div>
                <AiOutlinePlus size={26} className={styles.addBtn}/>
            </header>
        </div>
    );
};

export default Library;