import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from './ingredient-item';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import ingredientShape from '../../utils/types';
import Modal from '../modals/modal';
import { CLOSE_INGREDIENT_MODAL } from '../../services/actions/modal_ingredient';
import IngredientDetails from '../modals/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';



function BurgerIngredients () {

    const data = useSelector(store => store.getData.data);
    const ingredientModalData = useSelector(store => store.modalIngredient.data);
    const { name, image_large, calories, proteins, fat, carbohydrates } = ingredientModalData;
    const [currentTab, setCurrentTab] = React.useState('bun');
    const isModalVisible = useSelector(store => store.modalIngredient.isVisible);
    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch({
            type: CLOSE_INGREDIENT_MODAL
        })
    }

    const onTabClick = (tab) => {
        setCurrentTab(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({behavior: 'smooth'});
    };

    function renderIngredients(data, categoryName) {
        return data.map((ingredient)=>(
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
                { renderIngredients(data, categoryId) }
            </section>
        );
    }
    

    return(
        <main className={`${styles.wrap} pt-10 mr-10`}>
            <h1 className={`${styles.main_header} text text_type_main-large`}>Соберите бургер</h1>
            <div className={`${styles.tab_bar} mt-5 mb-10`}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={onTabClick}>
                    Булки
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={onTabClick}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={onTabClick}>
                    Начинки
                </Tab> 
            </div>
            <div className={styles.scrollWrap}>
                    { renderIngredientsSection("bun", "Булки") }
                    { renderIngredientsSection("sauce", "Соусы") }
                    { renderIngredientsSection("main", "Начинки") }
            </div>
            {   isModalVisible &&
                <Modal closeModal={closeModal} isVisible={isModalVisible} header="Детали ингредиента">
                    <div className={styles.wrap_modal}>
                        <IngredientDetails 
                            name={name} 
                            image_large={image_large} 
                            calories={calories} 
                            proteins={proteins} 
                            fat={fat} 
                            carbohydrates={carbohydrates} />
                    </div>      
                </Modal>
            } 
        </main>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientShape).isRequired
}

export default BurgerIngredients;