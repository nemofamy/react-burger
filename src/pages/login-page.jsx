import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './login-page.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const inputRef = useRef(null);
    // обработка почты
    const [email, setEmail] = useState('');
    const onEmailChange = e => {
        setEmail(e.target.value);
    };
    //обработка пароля
    const [password, setPassword] = useState('password');
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

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
                        onIconClick={onEmailChange}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={`mb-6`}>
                    <PasswordInput onChange={onPasswordChange} name={'password'} />
                </div>
                <Button type="primary" size="medium">
                    Войти
                </Button>
                <p className={styles.note}>Вы — новый пользователь? <Link className={styles.link} to={'../register'}>Зарегистрироваться</Link></p>
                <p className={styles.note}>Забыли пароль? <Link className={styles.link} to={'../forgot-password'}>Восстановить пароль</Link></p>
            </div>
        </div>    
    );
}

export default LoginPage;