import styles from './SIdebar.module.css'
import React, {useMemo} from "react";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import {useLocation} from "react-router-dom";
import Box from "../Box/Box.tsx";
import SidebarItem from "../SidebarItem/SidebarItem.tsx";
import Library from "../Library/Library.tsx";
import {RouteNames} from "../../router/routes.tsx";
interface SidebarProps {
    className?: string;
}
const Sidebar : React.FC<SidebarProps> = ({className}) => {
    const location = useLocation();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Главная',
            active: location.pathname == RouteNames.HOME,
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Поиск',
            active: location.pathname == RouteNames.SEARCH,
            href: '/search'
        }
    ], [location])
    return (
        <aside className={`${styles.sidebar} ${className}`}>
            <Box>
                <div className={styles.sidebarLinks}>
                    {routes.map(route => (
                        <SidebarItem key={route.label} {...route}/>
                    ))}
                </div>
            </Box>
            <Box className={styles.libraryLayout}>
                <Library/>
            </Box>
        </aside>
    );
};

export default Sidebar;