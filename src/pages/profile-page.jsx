import styles from './profile-page.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import ProfileLink from '../components/profile-link/profile-link';
import { logoutRequest, patchUser } from '../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ProfilePage = () => {
    const dispatch = useDispatch();

    const exit = () => {
        dispatch(logoutRequest());
    }

    //стабильный юзер из хранилица
    const userName = useSelector(state => state.auth.user.name);
    const userEmail = useSelector(state => state.auth.user.email);

    //местная копия 
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [pass, setPass] = useState('');

    const saveChanges = (e) => {
        e.preventDefault();
        if (name && email) {
            dispatch(patchUser(name, email, pass));
            setPass('');
        } 
    }

    const resetChanges = () => {
        setName(userName);
        setEmail(userEmail);
        setPass('');
    }

    return (
        <div className={styles.wrap}>
            <form onSubmit={saveChanges}>
                <nav className={styles.navigation}>
                    <ProfileLink to={'/profile'}>Профиль</ProfileLink>
                    <ProfileLink to={'/order-feed'}>История заказов</ProfileLink>
                    <ProfileLink to={'/'}><p onClick={exit}>Выход</p></ProfileLink>
                    <p className='text text_type_main-default text_color_inactive mt-20'>В этом разделе вы можете изменить свои персональные данные</p>
                </nav>
                <div className={`mb-6`}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={`mb-6`}>
                    <Input
                        type={'text'}
                        placeholder={'Логин'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name={'login'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={`mb-6`}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        value={pass}
                        onChange={(e => setPass(e.target.value))}
                        name={'password'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button htmlType="reset" type="primary" size="small" onClick={resetChanges}>
                        Отменить
                    </Button>
                    <Button htmlType="submit" type="primary" size="small">
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ProfilePage;