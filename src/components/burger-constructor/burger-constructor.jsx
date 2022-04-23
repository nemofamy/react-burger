import React from 'react';
import { ConstructorElement, Button }  from '@ya.praktikum/react-developer-burger-ui-components';
import { CheckMarkIcon, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import Modal from '../modals/modal';
import doneIcon from '../../img/order-modal/doneicon.png';
import PropTypes from 'prop-types';

function BurgerConstructor (props) {
    const data = props.data;

    const [isModalVisible, setModalVisibility] = React.useState(false);

    const openModal = () => {
        setModalVisibility(true);
    }

    const closeModal = () => {
        setModalVisibility(false);
    }

    return (
        <section className={`${styles.wrap} pl-4 pt-25 pr-6`}>
            <div className={styles.burger_element}>
                <ConstructorElement 
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
            </div>
            {
                data.map(function (element, index) {
                    const { name,price,image } = element;
                    return (
                        <div key={index} className={styles.burger_element}>
                            <DragIcon type="primary" />
                            <ConstructorElement 
                                text={name}
                                price={price}
                                thumbnail={image}
                            />
                        </div>
                    );
                })
            }
            <ConstructorElement 
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
            
            <div className={`${styles.checkout_line} mt-10 mb-15`}>

                <div className={`${styles.cost_element} mr-10`}>
                    <p className="text text_type_digits-medium">610</p>
                    <div className={styles.cost_icon}>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>

                <div className={styles.order_button_wrap} >
                    <Button type="primary" size="medium" className={styles.order_button} onClick={openModal}>
                        <p className="text text_type_main-default">Оформить заказ</p>
                    </Button>
                </div>
                
            </div>

            {   isModalVisible &&
                <>
                    <Modal closeModal={closeModal} isVisible={isModalVisible} header="">
                        <div className={styles.wrap_modal}>
                            <p className={`${styles.order_number} text text_type_digits-large mb-8 mt-30`}>034536</p>
                            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
                            <div style={{ backgroundImage: `url(${doneIcon})`}} className={`${styles.check_icon} mb-15`}>
                                <CheckMarkIcon type="primary" />
                            </div>
                            <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
                            <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
                        </div>      
                    </Modal>
                </>
            }
        </section>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string,
        __v: PropTypes.number,
        _id: PropTypes.string
      }))
}

export default BurgerConstructor;

