import React from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {signInWithEmailAndPassword} from "firebase/auth";
import styles from "./styles.module.css";
import {HiXMark} from "react-icons/hi2";
import {PulseLoader} from "react-spinners";
import {useAppDispatch, useAppSelector} from "../../shared/lib";
import {setAuth, setLoading, setModalContent, setModalVisibility, setUser} from "../../shared/model";
import {IUser} from "../../shared/api/types.ts";
import {Registration} from "../registration";
import {auth} from "../../shared/config";

interface LoginFormValues {
    email: string;
    password: string;
    loginError: string;
}
export const Login : React.FC = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
        setError
    } = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
            password: "",
            loginError: ""
        }
    });
    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector(state => state.authReducer)
    const onClose = (): void  => {
        dispatch(setModalVisibility(false))
        dispatch(setModalContent(null))
    }
    const redirectToRegistration = (): void  => {
        dispatch(setModalContent(<Registration />))
    }
    const confirmLogin: SubmitHandler<LoginFormValues> = async ({email, password}): Promise<void> => {
        try{
            dispatch(setLoading(true))
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
            dispatch(setUser({
                userName: user.displayName,
                email: user.email
            } as IUser))
            dispatch(setAuth(true))
            dispatch(setModalVisibility(false))
            dispatch(setModalContent(null))
        } catch(err) {
            if (err instanceof Error) {
                setError("loginError", {
                    type: "custom",
                    message: err.message
                })
            }
        } finally {
            dispatch(setLoading(false))
        }
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.exitContainer}>
                <HiXMark size={26} onClick={onClose}/>
            </div>
            <form onSubmit={handleSubmit(confirmLogin)}>
                <h2>Авторизация</h2>
                <div className={styles.inputGroup}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <input type="text" autoComplete="off" {...field} className={`${styles.defaultInput} ${field.value ? styles.activeInput : ''} ${errors.email ? styles.errorInput : ''}`}/>
                        )}
                        rules={{
                            required: "Данное поле обязательно",
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Некорректный email",
                            },
                        }}
                    />
                    <label htmlFor="">{errors.email ? errors.email.message : "Почта"}</label>
                </div>
                <div className={styles.inputGroup}>
                    <Controller
                        name="password"
                        control={control}defaultValue=""
                        render={({ field }) => (
                            <input type="password" autoComplete="off" {...field} className={`${styles.defaultInput} ${field.value ? styles.activeInput : ''} ${errors.password ? styles.errorInput : ''}`}/>
                        )}
                        rules={{
                            required: "Данное поле обязательно",
                            minLength: {
                                value: 6,
                                message: "Пароль должен содержать минимум 6 символов",
                            },
                            maxLength: {
                                value: 20,
                                message: "Пароль не должен превышать 20 символов",
                            },
                        }}
                    />
                    <label htmlFor="">{errors.password ? errors.password.message : "Пароль"}</label>
                </div>
                <button>{isLoading ? <PulseLoader color="#22c55e" size={10}/> : "Войти"}</button>
                {
                    errors.loginError &&
                    <div className={styles.loginError}>
                        {errors.loginError.message}
                    </div>
                }
                <span className={styles.accountInfo}>Нет аккаунта? <span onClick={redirectToRegistration}>Зарегистрироваться</span></span>
            </form>
        </div>
    );
};