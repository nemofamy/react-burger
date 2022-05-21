import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef } from 'react';
import styles from './forgot-password-page.module.css';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // тут нужны проверки и вообще эту историю лучше вынести в экшены
    const onButtonClick = async () => {
        const res = await fetch('https://norma.nomoreparties.space/api/password-reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "email": value
                }
            )
        });
        navigate('/reset-password');
        console.log(res.json());
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
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
                <Button onClick={onButtonClick} type="primary" size="medium">
                    Восстановить
                </Button>
                <p className={styles.note}>Вспомнили пароль? <Link className={styles.link} to={'../login'}>Войти</Link></p>
            </div>
        </div>    
    );
}

export default ForgotPasswordPage;