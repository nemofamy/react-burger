import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Typography from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './button.module.css'
import { createModuleResolutionCache } from 'typescript';

function Button (props) {
    return (
        <a href={props.href} className={styles.button}>
                {props.iconType === 'burger' && <BurgerIcon type={props.isActive ? 'primary' : 'secondary'} />}
                {props.iconType === 'list' && <ListIcon type={props.isActive ? 'primary' : 'secondary'} />}
                {props.iconType === 'profile' && <ProfileIcon type={props.isActive ? 'primary' : 'secondary'} />}
                <p className={`${styles.label} text text_type_main-default ${!props.isActive && 'text_color_inactive'}`}>{props.label}</p>
        </a>
    );
}

export default Button;