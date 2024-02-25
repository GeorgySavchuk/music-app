import React from "react";
import styles from "./Main.module.css";
interface MainProps {
    children?: React.ReactNode;
}

const Main : React.FC<MainProps> = ({children}) => {
    return (
        <main className={styles.mainContent}>
            {children}
        </main>
    );
};

export default Main;