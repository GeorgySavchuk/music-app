import React from 'react';
import Header from "../../components/Header/Header.tsx";
import styles from './NotFound.module.css'
import notFoundImg from '../../images/404.png'
import Layout from "../../components/Layout/Layout.tsx";
const NotFound : React.FC = () => {
    return (
        <Layout className={styles.sidebar}>
            <Header/>
            <div className={styles.imgContainer}>
                <img src={notFoundImg}/>
            </div>
        </Layout>
    );
};

export default NotFound;