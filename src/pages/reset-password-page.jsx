import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import styles from './forgot-password-page.module.css';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { passwordResetStep2 } from '../services/actions/auth';

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isRigthPath = location.state;

    const [token, setToken] = useState('');
    const onTokenChange = e => {
        setToken(e.target.value);
    };

    const [password, setPassword] = useState('');
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

    const onButtonClick = async () => {
        passwordResetStep2(password, token);
        navigate('/', {replace: true});
    }

    if (!isRigthPath) {
        return (
            <Navigate to={'../forgot-password'} replace />
        );
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