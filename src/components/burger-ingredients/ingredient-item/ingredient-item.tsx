import React from 'react';
import styles from './ingredient-item.module.css';
import Typography from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientItem (props) {
    return (
        <div className={styles.ingredient_item}>
            {props.__v > 0 && <Counter count={props.__v} size="default" />}
            <img className={styles.image} alt={props.name} src={props.img} />
            <div className={styles.cost_block}>
                <p className={`${styles.cost} text text_type_digits-default`}>{props.cost}</p> 
                <CurrencyIcon type="primary" />
            </div>
            <h4 className={`${styles.dish_name} text text_type_main-default`}>{props.name}</h4>
        </div>
    );
}

export default IngredientItem;