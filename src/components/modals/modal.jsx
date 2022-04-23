import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modals/modal-overlay';

const modalRoot = document.getElementById("react-modals");

function Modal (props) {
    const { children, isVisible, closeModal, header } = props;
    
    React.useEffect(
        () => {
            document.addEventListener('keydown', escHandler);
            return () => {
                document.removeEventListener('keydown', escHandler);
           }
        }
    );

    const escHandler = (event) => {
        if (event.key === "Escape" && isVisible) {
            closeModal();
        }
      }

    return ReactDOM.createPortal(
        <>
            <ModalOverlay closeModal={closeModal}/>
            {
                isVisible &&
                <>
                    <div className={styles.modal} >
                        <div onClick={closeModal} className={styles.close_button}>
                            <CloseIcon type="primary" />
                        </div>
                        { header.length > 0 &&
                            <h2 className="text text_type_main-large mt-10 ml-10 mr-10">{header}</h2>
                        }
                        {children}
                    </div>
                </>
            }
       </>,
       modalRoot
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func,
    isVisible: PropTypes.bool,
    header: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Modal;
