import { ConstructorElement, Button }  from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import Modal from '../modals/modal';
import OrderDetails from '../modals/order-details';
import { useDrop } from "react-dnd";
import { 
    ADD_INGREDIENT_IN_CONSTRUCTOR,
    BUN_SELECTOR
    } from '../../services/actions/burger-constructor';
import { INGREDIENT_AMOUNT_INCREASE, BUN_AMOUNT_CHANGE, CONSTRUCTOR_DATA_RESET  } from '../../services/actions/get-data';
import { useDispatch, useSelector } from 'react-redux';
import BurgerCard from './burger-card';
import { OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL } from '../../services/actions/modal-order';
import getOrderData from '../../services/actions/modal-order';
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from 'react-router-dom';


function BurgerConstructor () {
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user.name);
    const dispatch = useDispatch();
    const data = useSelector(store => store.burgerConstructor.data);
    const bun = useSelector(store => store.burgerConstructor.bun);
    const isModalVisible = useSelector(store => store.modalOrder.isVisible);

    // проверяем количество булок в сторе
    const isBunSelected = useSelector(store => store.getData.data).filter(el => el.type === 'bun').reduce((acc, el) => el.amount + acc, 0);
    
    // получаем массив для отправки запроса заказа, вытаскиваем _id ингредиентов в конструкторе,
    // затем "обкладываем" выбранными булками
    let constructorDataIdenties = data.map(item => item._id);
    constructorDataIdenties = [bun._id ,...constructorDataIdenties, bun._id];

    const onDropHandler = (item) => {
        if (item.type !== 'bun') {
            const uuid = uuidv4();
            item = {...item, uuid: uuid, amount: undefined}; 
            dispatch({
                type: ADD_INGREDIENT_IN_CONSTRUCTOR,
                payload: { item }
            });
            dispatch({
                type: INGREDIENT_AMOUNT_INCREASE,
                payload: {
                    _id: item._id
                }
            });
        } else {
            dispatch({
                type: BUN_SELECTOR,
                payload: { item }
            });
            dispatch({
                type: BUN_AMOUNT_CHANGE,
                payload: {
                    _id: item._id
                }
            });
        }
    }

    const [{isHover}, dropTarget] = useDrop({
        accept: 'ingredient',
        drop (item) {
            onDropHandler(item)
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        })
    });

    const openModal = () => {
        if (user) {
            dispatch(getOrderData(constructorDataIdenties));
            dispatch({
                type: OPEN_ORDER_MODAL
            })
        } else {
            navigate('/login', {fromPage: '/', replace: true});
        }
    }

    const closeModal = () => {
        dispatch({
            type: CLOSE_ORDER_MODAL
        });
        dispatch({
            type: CONSTRUCTOR_DATA_RESET
        })
    }

    const totalCostCalculate = () => {
        const ingredientsCost = data.reduce((acc, item) => {
            return acc += item.price;
        },0)
        const bunsCost = bun.price * 2;
        return ingredientsCost + bunsCost;
    }
    

    return (
        <section className={`${styles.wrap}  ${isHover && styles.hovered_wrap} pl-4 pt-25 pr-6`} ref={dropTarget}>
            { isBunSelected === 0 &&
                <div className={styles.empty_constructor}>
                    <p className={styles.empty_constructor_text}>Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа</p>
                </div>
            }
            { isBunSelected > 0 &&
            <div className={`${styles.burger_element_top} ${styles.burger_element}`}>
                <ConstructorElement 
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>
            }
            <div className={`${styles.scroll_container} pr-2`}>
                { 
                    data.map(function (element, index) {
                        if (element.type !== "bun") {
                            return (
                                <BurgerCard key={element.uuid} index={index} element={element}/>
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </div>
            { isBunSelected > 0 &&
                <div className={`${styles.burger_element_bottom} ${styles.burger_element}`}>
                    <ConstructorElement 
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>
            }

            { isBunSelected > 0 &&
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
            }

            {   isModalVisible && user &&
                <>
                    <Modal closeModal={closeModal} isVisible={isModalVisible} header="">
                        <OrderDetails />  
                    </Modal>
                </>
            }
        </section>
    );
}

export default BurgerConstructor;

