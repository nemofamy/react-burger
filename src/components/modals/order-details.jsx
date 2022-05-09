import styles from './order-details.module.css';
import doneIcon from '../../img/doneicon.png';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

function OrderDetails() {
    const orderNumber = useSelector(store => store.modalOrder.orderNumber);
    const isLoading = useSelector(store => store.modalOrder.dataRequest);

    return (
        <>
            { isLoading && 
                <p className={`${styles.order_number} text text_type_main-large mb-8 mt-30`}>Выбираем номер...</p>
            }
            <div className={styles.wrap_modal}>
            { !isLoading &&  
                <p className={`${styles.order_number} text text_type_digits-large mb-8 mt-30`}>{orderNumber}</p>
            }
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