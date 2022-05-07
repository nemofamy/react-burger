import React, { useEffect, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import ingredientShape from '../../utils/types';
import Modal from '../modals/modal';
import { CLOSE_INGREDIENT_MODAL } from '../../services/actions/modal_ingredient';
import IngredientDetails from '../modals/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import IngredientsSection from './ingredients-section';

function BurgerIngredients () {
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

    const scrollRef = useRef(null);
    const refBun = useRef(null);
    const refSauce = useRef(null);
    const refMain = useRef(null);

    // На всякий случай реализован гибкий механизм определения активной вкладки,
    // он поддерживает больше разделов, чем три (вдруг начинки разделят на астероидные и флору)

    // определяем искомое имя по точкам перехода
    const getNameUtility = (currentScrollHeight, arrPoints, arrNames) => {
        const index = arrPoints.findIndex(el => currentScrollHeight < el);
        if (index !== -1) {
            return arrNames[index];
        }
        return arrNames[arrNames.length - 1];
    }

    // принимает мыссив ссылки на разделы (с названиями)
    const onScrollHandler = (arrRefs) => {
        const currentScrollHeight = scrollRef.current.scrollTop;

        // определям массив с точками перехода
        const arrPoints = arrRefs.map((item, index) => {
            if (index === 0) {
                return item[0].current.scrollHeight / 2;
            } 
            return item[0].current.scrollHeight;
            
        }); 

        // массив с названиями
        const arrNames = arrRefs.map(item => {
            return item[1];
        }); 

        setCurrentTab(getNameUtility(currentScrollHeight, arrPoints, arrNames));
    }
    
    useEffect(() => {
        const onScroll = () => {
            return onScrollHandler([[refBun, 'bun'], [refSauce, 'sauce'], [refMain, 'main']]);
        }
        const scrollElement = scrollRef.current;
        scrollElement.addEventListener('scroll', onScroll);

        return () => {
            scrollElement.removeEventListener('scroll', onScroll);
        }   
    });
    

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
            <div className={styles.scrollWrap} ref={scrollRef}>
                <IngredientsSection refName={refBun} name={'Булки'} categoryId={'bun'} />
                <IngredientsSection refName={refSauce} name={'Соусы'} categoryId={'sauce'} />
                <IngredientsSection refName={refMain} name={'Начинки'} categoryId={'main'} />
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