import React, {useMemo} from "react";
import {useLocation} from "react-router-dom";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import styles from "./styles.module.css";
import {RouteNames} from "../../shared/routing";
import {Box} from "../layouts/box";
import {SidebarItem} from "../../entities/sidebar-item";
import {Library} from "../../entities/library";
interface SidebarProps {
    className?: string;
}
export const Sidebar : React.FC<SidebarProps> = ({className}) => {
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