import React from 'react';
import styles from './button.module.css'
import PropTypes from 'prop-types';
import { useMatch, Link } from 'react-router-dom';

function Button ({children, to, ...props}) {
    const match = useMatch(to);

    return (
        <Link 
            to={to} 
            className={`${styles.button} mb-4 mt-4 mr-2 pl-5 pr-5`}
        >
            {children}
            <p className={`ml-2 text text_type_main-default ${!match && 'text_color_inactive'}`}>{props.label}</p>
        </Link>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string
}

export default Button;