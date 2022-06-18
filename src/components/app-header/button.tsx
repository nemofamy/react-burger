import React, { FC, PropsWithChildren } from 'react';
import styles from './button.module.css'
import { useMatch, Link } from 'react-router-dom';


interface IButton extends PropsWithChildren<unknown> {
    to: string;
    label: string;
}

const Button: FC<IButton> = ({children, to, label}) => {
    const match = useMatch(to);

    return (
        <Link 
            to={to} 
            className={`${styles.button} mb-4 mt-4 mr-2 pl-5 pr-5`}
        >
            {children}
            <p className={`ml-2 text text_type_main-default ${!match && 'text_color_inactive'}`}>{label}</p>
        </Link>
    );
}

export default Button;