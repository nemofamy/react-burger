import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Typography from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';


function AppHeader () {
    const [iconType, setIconType] = React.useState({
        burgerIconType: "primary",
        listIconType: "secondary",
        profileIconType: "secondary"
    });

    return (
        <header className={styles.header}>
            <div className={styles.logo}><Logo /></div>
            <a href="#" className={`${styles.active__button} text text_type_main-default`}>
                <BurgerIcon type={iconType.burgerIconType} /> <p className={styles.label}>Конструктор</p>
            </a>
            <a href="#" className={`${styles.button} text text_type_main-default`}>
                <ListIcon type={iconType.listIconType} /> <p className={styles.label}>Лента заказов</p>
            </a>
            <a href="#" className={`${styles.button} text text_type_main-default`}>
                <ProfileIcon type={iconType.profileIconType} /> <p className={styles.label}>Личный кабинет</p>
            </a>
        </header>

    );
}

export default AppHeader;