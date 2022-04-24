import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay (props) {
    const { closeModal } = props;

    return  <div className={styles.modal_overlay} onClick={closeModal}></div>;
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
}

export default ModalOverlay;
