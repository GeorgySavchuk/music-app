import styles from './Header.module.css'
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import React from "react";
import {useNavigate} from "react-router-dom";
import Login from "../Login/Login.tsx";
import {setModalContent, setModalVisibility} from "../../store/slices/modalSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {auth} from "../../firebase/FirebaseInit.ts";
import {signOut} from "firebase/auth";
interface HeaderProps {
    children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({children}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isAuth} = useAppSelector(state => state.authReducer)
    const handleLoginBtnClick = () : void  => {
        dispatch(setModalVisibility(true))
        dispatch(setModalContent(<Login/>))
    }
    const confirmLogout = async () => {
        await signOut(auth)
    }
    return (
        <header className={styles.pageHeader}>
            <div className={styles.headerBtns}>
                <div className={styles.historyBtns}>
                    <button onClick={() => navigate(-1)}>
                        <RxCaretLeft size={35} color="#fff"/>
                    </button>
                    <button onClick={() => navigate(1)}>
                        <RxCaretRight size={35} color="#fff"/>
                    </button>
                </div>
                <div className={styles.navBtns}>
                    <button>
                        <HiHome size={26} color="#000"/>
                    </button>
                    <button>
                        <BiSearch size={26} color="#000"/>
                    </button>
                </div>
                {
                    isAuth
                        ? <div className={styles.loginBtn} onClick={confirmLogout}>
                            <span>Выйти</span>
                        </div>
                        : <div className={styles.loginBtn} onClick={handleLoginBtnClick}>
                            <span>Войти</span>
                        </div>
                }
            </div>
            {children}
        </header>
    );
};

export default Header;