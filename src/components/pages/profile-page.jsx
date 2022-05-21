import styles from './profile-page.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <nav className={styles.navigation}>
                    <li className="text text_type_main-medium">Профиль</li>
                    <li className="text text_type_main-medium">История заказов</li>
                    <li className="text text_type_main-medium">Выход</li>
                    <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
                </nav>
                <div className={`mb-6`}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        // onChange={onTokenChange}
                        icon={'EditIcon'}
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
                        // onChange={onTokenChange}
                        icon={'EditIcon'}
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
                        // onChange={onPasswordChange}
                        icon={'EditIcon'}
                        name={'password'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;