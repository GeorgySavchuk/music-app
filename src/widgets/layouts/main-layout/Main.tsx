import React from "react";
import styles from "./styles.module.css";

interface MainProps {
    children?: React.ReactNode;
}

export const Main : React.FC<MainProps> = ({children}) => {
    return (
        <main className={styles.mainContent}>
            {children}
        </main>
    );
};