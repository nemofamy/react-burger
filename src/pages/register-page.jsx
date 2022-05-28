import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef, useEffect } from 'react';
import styles from './register-page.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../services/actions/register';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user.name);
    const inputRef = useRef(null);
    const [name, setName] = useState('value');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('password');
    
    const registerAttempt = () => {
        dispatch(registerRequest(name, email, password));
        setName('');
        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    },[user]); 
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
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={`mb-6`}>
                    <PasswordInput onChange={e => setPassword(e.target.value)} name={'password'} />
                </div>
                <Button onClick={registerAttempt} type="primary" size="medium">
                    Зарегистрироваться
                </Button>
                <p className={styles.note}>Уже зарегистрированы? <Link className={styles.link} to={'../login'}>Войти</Link></p>
            </div>
        </div>    
    );
}

export default RegisterPage;