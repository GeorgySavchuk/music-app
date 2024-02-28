import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import {FaPlay} from "react-icons/fa";

interface RecentlyVisitedItemProps {
    image: string;
    name: string;
    href: string;
}
export const RecentlyVisitedItem : React.FC<RecentlyVisitedItemProps> = ({
    image,
    name,
    href
}) => {
    const navigate = useNavigate()
    const redirect = () => {
        navigate(href)
    }
    return (
        <button className={styles.listItemBtn} onClick={redirect}>
            <div className={styles.listItemImg}>
                <img src={image}/>
            </div>
            <span>{name}</span>
            <div className={styles.playBtn}>
                <FaPlay size={16}/>
            </div>
        </button>
    );
};