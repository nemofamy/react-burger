import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './forgot-password-page.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { passwordReset } from '../services/actions/auth';

const ForgotPasswordPage = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        passwordReset(value);
        navigate('/reset-password', {state: true});
    }

    return (
        <div className={styles.wrap}>
            <form onSubmit={onFormSubmit}>
                <h1 className={`${styles.header} text text_type_main-medium mb-3`}>Восстановление пароля</h1>
                <div className={`mb-6`}>
                <Input
                        type={'text'}
                        placeholder={'Укажите e-mail'}
                        onChange={e => setValue(e.target.value)}
                        icon={undefined}
                        value={value}
                        name={'email'}
                        error={false}
                        ref={inputRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <Button type="primary" size="medium">
                    Восстановить
                </Button>
                <p className={styles.note}>Вспомнили пароль? <Link className={styles.link} to={'../login'}>Войти</Link></p>
            </form>
        </div>    
    );
}

export default ForgotPasswordPage;