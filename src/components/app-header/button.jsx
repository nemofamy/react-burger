import React from 'react';
import styles from './button.module.css'
import PropTypes from 'prop-types';

function Button (props) {
    return (
        <a href={props.href} className={`${styles.button} mb-4 mt-4 mr-2 pl-5 pr-5`}>
                {props.children}
                <p className={`ml-2 text text_type_main-default ${!(props.activePage === props.label) && 'text_color_inactive'}`}>{props.label}</p>
        </a>
    );
}

Button.propTypes = {
    activePage: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Button;