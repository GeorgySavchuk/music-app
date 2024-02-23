import React from 'react';
import {IconType} from "react-icons";
import {Link} from "react-router-dom";
import styles from './SidebarItem.module.css'
interface SidebarItemProps {
    icon: IconType,
    label: string;
    active: boolean;
    href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href
}) => {
    return (
        <Link to={href} className={`${styles.linkLayout} ${active ? styles.active : ''}`}>
            <Icon size={26}/>
            <span className={styles.link}>{label}</span>
        </Link>
    );
};

export default SidebarItem;