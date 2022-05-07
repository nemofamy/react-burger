import styles from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientShape from '../../utils/types';
import { useDrag } from "react-dnd";
import { useDispatch } from 'react-redux';
import { OPEN_INGREDIENT_MODAL } from '../../services/actions/modal_ingredient';




function IngredientItem (props) {
    const { type, carbohydrates, proteins, fat, calories, name, image, image_large, price, amount, _id } = props.dataset;
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch({
            type: OPEN_INGREDIENT_MODAL,
            paiload: {
                props
            }
        })
    }

    const [{ isDrag }, dragRef] = useDrag({
        type: 'ingredient',
        item: { type, carbohydrates, proteins, fat, calories, name, image, image_large, price, amount, _id },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    return (
            <div className={`${styles.ingredient_item} ${ isDrag && styles.dragging_ingredient} ml-4`} onClick={openModal} ref={dragRef} draggable>
                {amount > 0 && <Counter count={amount} size="default" />}
                <img className="ml-4 mr-4" alt={name} src={image} />
                <div className={styles.cost_block}>
                    <p className="mr-2 text text_type_digits-default">{price}</p> 
                    <CurrencyIcon type="primary" />
                </div>
                <h4 className={`${styles.dish_name} text text_type_main-default`}>{name}</h4>
            </div>
    );
}

IngredientItem.propTypes = {
    dataset: ingredientShape.isRequired
}

export default IngredientItem;