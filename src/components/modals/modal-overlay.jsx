import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

function ModalOverlay (props) {
    const { closeModal } = props;
    return ReactDOM.createPortal(
        <> <div className={styles.modal_overlay} onClick={closeModal}></div></>, modalRoot
    );
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func
}

export default ModalOverlay;
