import React from 'react';
import Sidebar from "../Sidebar/Sidebar.tsx";
import styles from './Layout.module.css'
import Modal from "../Modal/Modal.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
interface LayoutProps {
    className?: string;
    children?: React.ReactNode;
}
const Layout : React.FC<LayoutProps> = ({className, children}) => {
    const {isVisible, content} = useAppSelector(state => state.modalReducer)
    return (
        <div className={styles.layout}>
            <Modal isVisible={isVisible} children={content}/>
            <Sidebar className={className}/>
            <div className={styles.pageContent}>
                {children}
            </div>
        </div>
    );
};

export default Layout;