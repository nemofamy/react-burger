import React from 'react';
import { ConstructorElement, Button }  from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import Modal from '../modals/modal';
import PropTypes from 'prop-types';
import ingredientShape from '../../utils/types';
import OrderDetails from '../modals/order-details';

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
            <div className={`${styles.burger_element_top} ${styles.burger_element}`}>
                <ConstructorElement 
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
            </div>
            <div className={`${styles.scroll_container} pr-2`}>
                {
                    data.map(function (element, index) {
                        const { name,price,image, type } = element;
                        if (type !== "bun") {
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
                        } else {
                            return null;
                        }
                    })
                }
            </div>
            <div className={`${styles.burger_element_bottom} ${styles.burger_element}`}>
                <ConstructorElement 
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                />
            </div>
            
            <div className={`${styles.checkout_line} mt-10 mb-15`}>

                <div className={`${styles.cost_element} mr-10`}>
                    <p className="text text_type_digits-medium">610</p>
                    <div className={styles.cost_icon}>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>

                <div className={`${styles.order_button_wrap} mr-6`} >
                    <Button type="primary" size="medium" className={styles.order_button} onClick={openModal}>
                        <p className="text text_type_main-default">Оформить заказ</p>
                    </Button>
                </div>
                
            </div>

            {   isModalVisible &&
                <>
                    <Modal closeModal={closeModal} isVisible={isModalVisible} header="">
                        <OrderDetails />  
                    </Modal>
                </>
            }
        </section>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientShape).isRequired
}

export default BurgerConstructor;

