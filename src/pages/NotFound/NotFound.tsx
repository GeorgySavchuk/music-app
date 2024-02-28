import React from 'react';
import styles from './styles.module.css'
import notFoundImg from '../../images/404.png'
import {Layout} from "../../widgets/layouts/app-layout";
import {Header} from "../../widgets/header";
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