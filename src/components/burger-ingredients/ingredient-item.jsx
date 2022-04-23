import React from 'react';
import styles from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modals/modal';
import SmallInfoBlock from './small-info-block';
import ModalOverlay from '../modals/modal-overlay';
import PropTypes from 'prop-types';

function IngredientItem (props) {
    const { carbohydrates, proteins, fat, calories, name, image, image_large, price, __v } = props.dataset;
    const [isModalVisible, setModalVisibility] = React.useState(false);
    const [isOverlayActive, setOverlayActive] = React.useState(false);

    const openModal = () => {
        setModalVisibility(true);
        setOverlayActive(true);
    }

    const closeModal = () => {
        setModalVisibility(false);
        setOverlayActive(false);
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
                    <ModalOverlay closeModal={closeModal} isActive={isOverlayActive}/>
                    <Modal closeModal={closeModal} isVisible={isModalVisible} header="Детали ингредиента">
                        <div className={styles.wrap}>
                            <img alt={name} src={image_large} />
                            <h3 className={`${styles.dish_name} text text_type_main-medium`}>{name}</h3>
                            <div className={`${styles.info} mb-15`}>
                                <SmallInfoBlock header="Калории,ккал" text={calories} />
                                <SmallInfoBlock header="Белки, г" text={proteins} />
                                <SmallInfoBlock header="Жиры, г" text={fat} />
                                <SmallInfoBlock header="Углеводы, г" text={carbohydrates} />
                            </div> 
                        </div>      
                    </Modal>
                </>
            }
            
        </>   
    );
}

IngredientItem.propTypes = {
    dataset: PropTypes.shape({
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
    })
}

export default IngredientItem;