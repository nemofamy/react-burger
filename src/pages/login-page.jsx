import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useRef, useEffect } from 'react';
import styles from './login-page.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginRequest } from '../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
    const user = useSelector(state => state.auth.user.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.fromPage || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tryAuth = (e) => {
        e.preventDefault();
        dispatch(loginRequest(email, password));
    }

    useEffect(() => {
        if (user) {
            navigate(fromPage, {replace: true});
        }
    },[user]);

    return (
        <div className={styles.wrap}>
            <form onSubmit={tryAuth}>
                <h1 className={`${styles.header} text text_type_main-medium mb-3`}>Вход</h1>
                    <div className={`mb-6`}>
                    <Input
                            type={'text'}
                            placeholder={'Email'}
                            onChange={e => setEmail(e.target.value)}
                            icon={undefined}
                            name={'email'}
                            error={false}
                            errorText={'Ошибка'}
                            size={'default'}
                            value={email}
                        />
                    </div>
                    <div className={`mb-6`}>
                        <PasswordInput value={password} onChange={e => setPassword(e.target.value)} name={'password'} />
                    </div>
                    <Button type="primary" size="medium">
                        Войти
                    </Button>
                
                <p className={styles.note}>Вы — новый пользователь? <Link className={styles.link} to={'../register'}>Зарегистрироваться</Link></p>
                <p className={styles.note}>Забыли пароль? <Link className={styles.link} to={'../forgot-password'}>Восстановить пароль</Link></p>
            </form>
        </div>    
    );
}

export default LoginPage;