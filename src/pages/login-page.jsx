import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './login-page.module.css';
import { Link } from 'react-router-dom';
import { loginRequest } from '../services/actions/login';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tryAuth = () => {
        dispatch(loginRequest(email, password));
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <h1 className={`${styles.header} text text_type_main-medium mb-3`}>Вход</h1>
                <div className={`mb-6`}>
                <Input
                        type={'text'}
                        placeholder={'Email'}
                        onChange={e => setEmail(e.target.value)}
                        icon={undefined}
                        name={'email'}
                        error={false}
                        ref={inputRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={`mb-6`}>
                    <PasswordInput onChange={e => setPassword(e.target.value)} name={'password'} />
                </div>
                <Button onClick={tryAuth} type="primary" size="medium">
                    Войти
                </Button>
                <p className={styles.note}>Вы — новый пользователь? <Link className={styles.link} to={'../register'}>Зарегистрироваться</Link></p>
                <p className={styles.note}>Забыли пароль? <Link className={styles.link} to={'../forgot-password'}>Восстановить пароль</Link></p>
            </div>
        </div>    
    );
}

export default LoginPage;