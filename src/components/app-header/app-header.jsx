import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import Button from './button';
import PropTypes from 'prop-types';


function AppHeader (props) {
    const { activePage } = props;
    
    return (
        <header className={`${styles.header} mt-10 mr-10 ml-10`}>
            <div className={styles.logo}><Logo /></div>
            <nav className={styles.navigation}>
                <Button activePage={activePage} label="Конструктор" href="#">
                    <BurgerIcon type={activePage === "Конструктор" ? "primary" : "secondary"} />
                </Button>
                <Button activePage={activePage} label="Лента заказов" href="#">
                    <ListIcon type={activePage === "Лента заказов" ? "primary" : "secondary"} />
                </Button>
                <Button activePage={activePage} label="Личный кабинет" href="#">
                    <ProfileIcon type={activePage === "Личный кабинет" ? "primary" : "secondary"} />
                </Button>
            </nav>      
        </header>

    );
}

AppHeader.propTypes = {
    activePage: PropTypes.string
}

export default AppHeader;