import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './register-page.module.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    //обработка имени
    const [name, setName] = useState('value');
    const inputRef = useRef(null);
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0);
        alert('Icon Click Callback');
    };
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
                <h1 className={`${styles.header} text text_type_main-medium mb-3`}>Регистрация</h1>
                <div className={`mb-6`}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        icon={undefined}
                        name={'name'}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
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
                    Зарегистрироваться
                </Button>
                <p className={styles.note}>Уже зарегистрированы? <Link className={styles.link} to={'../login'}>Войти</Link></p>
            </div>
        </div>    
    );
}

export default RegisterPage;