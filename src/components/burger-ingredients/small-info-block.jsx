import React from 'react';
import styles from './small-info-block.module.css';
import PropTypes from 'prop-types';

function SmallInfoBlock(props) {
    const { header, text } = props;

    return (
        <div className={styles.container}>
            <h5 className="text text_type_main-default text_color_inactive">{header}</h5>
            <p className="text text_type_digits-default text_color_inactive">{text}</p>
        </div>    
    );
}

SmallInfoBlock.propsType = {
    header: PropTypes.string,
    text: PropTypes.number
}

export default SmallInfoBlock;