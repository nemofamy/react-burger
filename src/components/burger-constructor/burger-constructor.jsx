import React from 'react';
import { ConstructorElement, Button }  from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import Modal from '../modals/modal';
import PropTypes from 'prop-types';
import ingredientShape from '../../utils/types';
import OrderDetails from '../modals/order-details';
import { useDrop } from "react-dnd";
import { 
    ADD_INGREDIENT_IN_CONSTRUCTOR, 
    REMOVE_INGREDIENT_IN_CONCTRUCTOR, 
    BUN_SELECTOR } from '../../services/actions/burger-constructor';
import { useDispatch, useSelector } from 'react-redux';

function BurgerConstructor () {
    const dispatch = useDispatch();
    const data = useSelector(store => store.burgerConstructor.data);
    const bun = useSelector(store => store.burgerConstructor.bun);

    const onDropHandler = (item) => {
        if (item.type !== 'bun') {
            const elementId = String(Date.now());
            item = {...item, elementId: elementId};
            dispatch({
                type: ADD_INGREDIENT_IN_CONSTRUCTOR,
                payload: item
            })
        } else {
            dispatch({
                type: BUN_SELECTOR,
                payload: item
            })
        }
    }

    const onClick = (e) => {
        if (e.target.parentElement.parentElement.classList.contains('constructor-element__action')) {
            dispatch({
                type: REMOVE_INGREDIENT_IN_CONCTRUCTOR,
                payload: e.currentTarget.id
            })
        }

    }

    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            onDropHandler(item)
        }
    });

    const [isModalVisible, setModalVisibility] = React.useState(false);

    const openModal = () => {
        setModalVisibility(true);
    }

    const closeModal = () => {
        setModalVisibility(false);
    }

    const totalCostCalculate = () => {
        const ingredientsCost = data.reduce((acc, item) => {
            return acc += item.price;
        },0)
        const bunsCost = bun.price * 2;
        return ingredientsCost + bunsCost;
    }
    return (
        <section className={`${styles.wrap} pl-4 pt-25 pr-6`} ref={dropTarget}>
            <div className={`${styles.burger_element_top} ${styles.burger_element}`}>
                <ConstructorElement 
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>
            <div className={`${styles.scroll_container} pr-2`}>
                {
                    data.map(function (element, index) {
                        const { name, price, image, type, elementId } = element;
                        if (type !== "bun") {
                            return (
                                <div key={index} id={elementId} className={styles.burger_element} onClick={onClick}>
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
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>
            
            <div className={`${styles.checkout_line} mt-10 mb-15`}>

                <div className={`${styles.cost_element} mr-10`}>
                    <p className="text text_type_digits-medium">{totalCostCalculate()}</p>
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

