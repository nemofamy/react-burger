import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from './ingredient-item';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import ingredientShape from '../../utils/types';


function BurgerIngredients (props) {
    const current = 'bun';

    function renderIngredients(array, categoryName) {
        return array.map((ingredient, index)=>(
            ingredient.type === categoryName &&
                <IngredientItem key={ingredient._id} dataset={ingredient} />
        ));
    }

    function renderIngredientsBlockHeader(categoryId, categoryName) {
        return (
            <h3 id={categoryId} className={`${styles.section_header} text text_type_main-medium`}>{categoryName}</h3>
        );
    }

    function renderIngredientsSection(categoryId, name) {
        return (
            <section className={`${styles.dishtype_section} pb-10`}>
                { renderIngredientsBlockHeader(categoryId, name) }
                { renderIngredients(props.data, categoryId) }
            </section>
        );
    }
    

    return(
        <main className={`${styles.wrap} pt-10 mr-10`}>
            <h1 className={`${styles.main_header} text text_type_main-large`}>Соберите бургер</h1>
            <div className={`${styles.tab_bar} mt-5 mb-10`}>
                <Tab value="bun" active={current === 'bun'}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'}>
                    Начинки
                </Tab> 
            </div>
            <div className={styles.scrollWrap}>
                    { renderIngredientsSection("bun", "Булки") }
                    { renderIngredientsSection("sauce", "Соусы") }
                    { renderIngredientsSection("main", "Начинки") }
            </div>
        </main>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientShape).isRequired
}

export default BurgerIngredients;