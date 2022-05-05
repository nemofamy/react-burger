import React from 'react';
import styles from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal';
import ingredientShape from '../../utils/types';
import IngredientDetails from '../modals/ingredient-details';
import { useDrag } from "react-dnd";


function IngredientItem (props) {
    const { type, carbohydrates, proteins, fat, calories, name, image, image_large, price, __v, _id } = props.dataset;
    const [isModalVisible, setModalVisibility] = React.useState(false);

    const openModal = () => {
        setModalVisibility(true);
    }

    const closeModal = () => {
        setModalVisibility(false);
    }

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: { type, carbohydrates, proteins, fat, calories, name, image, image_large, price, __v, _id },
        // collect: monitor => ({
        //     isDrag: monitor.isDragging()
        // })
    });

    return (
        <>
            <div className={`${styles.ingredient_item} ml-4`} onClick={openModal} ref={dragRef} draggable>
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