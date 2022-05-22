import styles from './profile-page.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import ProfileLink from '../components/profile-link/profile-link';


const ProfilePage = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.form}>
                <nav className={styles.navigation}>
                    <ProfileLink to={'/profile'}>Профиль</ProfileLink>
                    <ProfileLink to={'/order-feed'}>История заказов</ProfileLink>
                    <ProfileLink to={'/'}>Выход</ProfileLink>
                    <p className='text text_type_main-default text_color_inactive mt-20'>В этом разделе вы можете изменить свои персональные данные</p>
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