import React from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import styles from "./styles.module.css";
import {HiXMark} from "react-icons/hi2";
import {PulseLoader} from "react-spinners";
import {useAppDispatch, useAppSelector} from "../../shared/lib";
import {setAuth, setLoading, setModalContent, setModalVisibility, setUser} from "../../shared/model";
import {auth} from "../../shared/config";
import {Login} from "../login";

interface RegistrationFormValues {
    email: string;
    userName: string;
    password: string;
    registrationError: string;
}

export const Registration: React.FC = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
        setError
    } = useForm<RegistrationFormValues>({
        defaultValues: {
            email: "",
            userName: "",
            password: "",
            registrationError: ""
        }
    });
    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector(state => state.authReducer)

    const onClose = (): void => {
        dispatch(setModalVisibility(false));
        dispatch(setModalContent(null));
    };

    const redirectToLogin = (): void => {
        dispatch(setModalContent(<Login />));
    };

    const confirmRegistration: SubmitHandler<RegistrationFormValues> = async ({email, userName, password}): Promise<void> => {
        try{
            dispatch(setLoading(true))
            await createUserWithEmailAndPassword(auth, email, password)
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, {
                    displayName: userName
                })
            }
            dispatch(setUser({
                userName,
                email
            }))
            dispatch(setAuth(true))
            dispatch(setModalVisibility(false))
            dispatch(setModalContent(null))
        } catch (err) {
            if (err instanceof Error) {
                setError("registrationError", {
                    type: "custom",
                    message: err.message});
            }
        } finally {
            dispatch(setLoading(false))
        }
    };
    return (
        <div className={styles.registrationContainer}>
            <div className={styles.exitContainer}>
                <HiXMark size={26} onClick={onClose} />
            </div>
            <form onSubmit={handleSubmit(confirmRegistration)}>
                <h2>Регистрация</h2>
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
                        name="userName"
                        control={control}
                        render={({ field }) => (
                            <input type="text" autoComplete="off" {...field} className={`${styles.defaultInput} ${field.value ? styles.activeInput : ''} ${errors.userName ? styles.errorInput: ''}`}/>
                        )}
                        rules={{
                            required: "Данное поле обязательно",
                        }}
                    />
                    <label htmlFor="">{errors.userName ? errors.userName.message : "Логин"}</label>
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
                <button>{isLoading ? <PulseLoader color="#22c55e" size={10}/> : "Создать аккаунт"}</button>
                {
                    errors.registrationError &&
                    <div className={styles.registrationError}>
                        {errors.registrationError.message}
                    </div>
                }
                <span className={styles.accountInfo}>Есть аккаунт? <span onClick={redirectToLogin}>Войти</span></span>
            </form>
        </div>
    );
};