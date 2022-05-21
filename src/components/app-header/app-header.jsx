import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Button from './button';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


function AppHeader () {
    const location = useLocation();
    const defineIconType = (path) => {
        return location.pathname === path ? "primary" : "secondary";
    }

    return (
        <header className={`${styles.header} mt-10 mr-10 ml-10`}>
            <div className={styles.logo}><Logo /></div>
            <nav className={styles.navigation}>
                <Button to='/' label='Конструктор'>
                    <BurgerIcon type={defineIconType('/')} />
                </Button>
                <Button to='/order-feed' label='Лента заказов'>
                    <ListIcon type={defineIconType('/order-feed')} />
                </Button>
                <Button to='/profile' label='Личный кабинет'>
                    <ProfileIcon type={defineIconType('/profile')} />
                </Button>
            </nav>      
        </header>
    );
}

AppHeader.propTypes = {
    activePage: PropTypes.string.isRequired
}

export default AppHeader;