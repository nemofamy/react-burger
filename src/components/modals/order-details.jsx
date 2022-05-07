import styles from './order-details.module.css';
import doneIcon from '../../img/doneicon.png';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

function OrderDetails() {
    const orderNumber = useSelector(store => store.modalOrder.orderNumber);
    return (
        <>
            <div className={styles.wrap_modal}>
                <p className={`${styles.order_number} text text_type_digits-large mb-8 mt-30`}>{orderNumber}</p>
                <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
                <div style={{ backgroundImage: `url(${doneIcon})`}} className={`${styles.check_icon} mb-15`}>
                    <CheckMarkIcon type="primary" />
                </div>
                <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
            </div>    
        </>
    );
}



export default OrderDetails;