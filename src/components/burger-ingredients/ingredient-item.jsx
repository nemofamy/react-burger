import React from 'react';
import styles from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal';
import ingredientShape from '../../utils/types';
import IngredientDetails from '../modals/ingredient-details';

function IngredientItem (props) {
    const { carbohydrates, proteins, fat, calories, name, image, image_large, price, __v } = props.dataset;
    const [isModalVisible, setModalVisibility] = React.useState(false);

    const openModal = () => {
        setModalVisibility(true);
    }

    const closeModal = () => {
        setModalVisibility(false);
    }

    return (
        <>
            <div className={`${styles.ingredient_item} ml-4`} onClick={openModal}>
                {__v > 0 && <Counter count={__v} size="default" />}
                <img className="ml-4 mr-4" alt={name} src={image} />
                <div className={styles.cost_block}>
                    <p className="mr-2 text text_type_digits-default">{price}</p> 
                    <CurrencyIcon type="primary" />
                </div>
                <h4 className={`${styles.dish_name} text text_type_main-default`}>{name}</h4>
            </div>
            
            {   isModalVisible &&
                <>
                    <Modal closeModal={closeModal} isVisible={isModalVisible} header="Детали ингредиента">
                        <div className={styles.wrap}>
                            <IngredientDetails 
                                name={name} 
                                image_large={image_large} 
                                calories={calories} 
                                proteins={proteins} 
                                fat={fat} 
                                carbohydrates={carbohydrates} />
                        </div>      
                    </Modal>
                </>
            }
            
        </>   
    );
}

IngredientItem.propTypes = {
    dataset: ingredientShape.isRequired
}

export default IngredientItem;