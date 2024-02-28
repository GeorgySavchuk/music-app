import React from "react";
import styles from "./styles.module.css";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}
export const Box: React.FC<BoxProps> = ({children, className}) => {
    return (
        <div className={`${styles.box} ${className}`}>
            {children}
        </div>
    );
};