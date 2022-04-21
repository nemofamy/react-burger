import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Button from './button';


function AppHeader () {

    return (
        <header className={styles.header}>
            <div className={styles.logo}><Logo /></div>
            <nav className={styles.navigation}>
                <Button isActive={true} label="Конструктор" href="#" iconType="burger" />
                <Button isActive={false} label="Лента заказов" href="#" iconType="list" />
                <Button isActive={false} label="Личный кабинет" href="#" iconType="profile" />
            </nav>      
        </header>

    );
}

export default AppHeader;