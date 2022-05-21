import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './forgot-password-page.module.css';
import { Link, useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
    const navigate = useNavigate();

    // обработка почты
    const [token, setToken] = useState('');
    const onTokenChange = e => {
        setToken(e.target.value);
    };
    //обработка пароля
    const [password, setPassword] = useState('');
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

    // тут нужны проверки и вообще эту историю лучше вынести в экшены
    // не кликабельна иконка показа пароля
    const onButtonClick = async () => {
        console.log(`token: ${token} password: ${password}`);
        const res = await fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "password": password,
                    "token": token
                }
            )
        });
        navigate('/');
        console.log(res.json());
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <h1 className={`${styles.header} text text_type_main-medium mb-3`}>Восстановление пароля</h1>
                <div className={`mb-6`}>
                    <Input
                        type={'password'}
                        placeholder={'Введите новый пароль'}
                        onChange={onPasswordChange}
                        icon={'ShowIcon'}
                        name={'password'}
                        value={password}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={`mb-6`}>
                <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={onTokenChange}
                        icon={undefined}
                        name={'email'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <Button onClick={onButtonClick} type="primary" size="medium">
                    Сохранить
                </Button>
                <p className={styles.note}>Вспомнили пароль? <Link className={styles.link} to={'../login'}>Войти</Link></p>
            </div>
        </div>    
    );
}

export default ResetPasswordPage;