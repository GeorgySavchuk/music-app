import React from "react";
import styles from "./styles.module.css";
import {useAppSelector} from "../../../shared/lib";
import {Modal} from "../../../shared/ui";
import {Sidebar} from "../../sidebar";

interface LayoutProps {
    className?: string;
    children?: React.ReactNode;
}
export const Layout : React.FC<LayoutProps> = ({className, children}) => {
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